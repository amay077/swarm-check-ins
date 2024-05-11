<script lang="ts">
  import { onMount } from "svelte";
  import MastodonConnection from "./MastodonConnection.svelte";
  import { BskyAgent, RichText, type AtpSessionData } from "@atproto/api";
  import BlueSkyConnection from "./BlueSkyConnection.svelte";
  import { loadPostSetting, savePostSetting, type SettingDataBluesky, type SettingDataMastodon, type SettingDataTwitter, type SettingType } from "./func";
  import TwitterConnection from "./TwitterConnection.svelte";
  import { Config } from "../config";

  // localstorage からアクセストークンを取得する
  const accessToken = localStorage.getItem('sci_accessToken');

  const postSettings: {
    mastodon: SettingDataMastodon | null,
    bluesky: SettingDataBluesky | null,
    twitter: SettingDataTwitter | null,
  } = {
    mastodon: loadPostSetting('mastodon'),
    bluesky: loadPostSetting('bluesky'),
    twitter: loadPostSetting('twitter'),
  };

  const postTo: { [K in SettingType]: boolean } = {
    mastodon: postSettings?.mastodon?.enabled ?? false,
    bluesky: postSettings?.bluesky?.enabled ?? false,
    twitter: postSettings?.twitter?.enabled ?? false,
  };
  
  const title = window.navigator?.canShare != null ? `Share...` : 'Copy to clipboard';
  let checkins: any[] = [];

  let loading = true;
  let posting = false;

  onMount(async () => {
    console.log(`onMount`);

    try {

      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      if (params.get('state') == 'twitter_callback' && params.has('code')) {
        const code = params.get('code') ?? '';
        const res = await fetch(`${Config.API_ENDPOINT}/twitter_token?code=${code}`)

        if (res.ok) {
          const data = await res.json();
          postSettings.twitter = { type: 'twitter', title: 'Twitter', enabled: true, access_token_response: { refresh_token: data.refresh_token } };
          savePostSetting(postSettings.twitter);
          postTo.twitter = true;
          alert('Twitter に接続しました。');
        } else {
          console.error(`twitter 接続エラー -> res:`, res);
          alert('Twitter に接続できませんでした。');
        }
        
        const url = new URL(window.location.href);
        params.delete('code');
        params.delete('state');
        url.hash = '';
        url.search = params.toString();
        history.replaceState(null, '', url.toString());


      }      

      
      // アクセストークンを使用してチェックイン一覧を取得する
      const response = await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${accessToken}&v=20230823&limit=100`);
      if (!response.ok) {
        disconnect();
        return;
      }
      const data = await response.json();
      checkins = data.response.checkins.items;

      checkins.map((x: any) => {
        x.appAddress = `${x.venue.location.city}, ${x.venue.location.state}`;
        x.appPrivate = x.visibility === 'private';
      });
    } finally {
      loading = false;
    }
  });  

  const disconnect = () => {
    if (!confirm('Foursquare から切断しますか？')) {
      return;
    }

    // accessToken を localStorage から削除する
    localStorage.removeItem('sci_accessToken');
    window.location.href = './';
  };

  const copyToClipboard = (checkin: any) => {

    (async () => {
      const checkinDetail = await fetch(`https://api.foursquare.com/v2/checkins/${checkin.id}?oauth_token=${accessToken}&v=20230823`)
        .then(response => response.json());

      const shout = checkin.shout == null ? '' : `${checkin.shout} / `;
      
      const text = `${shout}I'm at ${checkin.venue.name} in ${checkin.appAddress} ${checkinDetail.response.checkin.checkinShortUrl}`;

      if (!window.navigator.canShare) {
        const resText = prompt('クリップボードにコピーしますか？', text);
        if (resText != null) {
          await navigator.clipboard.writeText(resText);
        }
        return;
      }

      try {
        await window.navigator.share({ text });
      } catch (e) {
        console.log(e);
      }
    })();
  };

  const post = async (checkin: any) => {
    posting = true;

    const checkinDetail = await fetch(`https://api.foursquare.com/v2/checkins/${checkin.id}?oauth_token=${accessToken}&v=20230823`)
        .then(response => response.json());

    const shout = checkin.shout == null ? '' : `${checkin.shout} / `;
    
    const text = `${shout}I'm at ${checkin.venue.name} in ${checkin.appAddress} ${checkinDetail.response.checkin.checkinShortUrl}`;
    const errors: string[] = [];

    const enableTypes = Array.from(Object.entries(postTo)).filter(([_, v]) => v).map(([k, v]) => (k as SettingType));
    for (const type of enableTypes) {
      switch (type) {
      case 'mastodon':
        if (!(await postToMastodon(text))) {
          errors.push('Mastodon');
        }
        break;
        case 'bluesky':
        if (!(await postToBlueSky(text, checkin))) {
          errors.push('BlueSky');
        }
        break;
      case 'twitter':
        if (!(await postToTwritter(text))) {
          errors.push('Twitter');
        }
        break;
      }
    }

    if (errors.length == 0) {
      alert('投稿しました。');

      for (const [k, v] of Object.entries(postSettings)) {
        const type = k as SettingType;
        if (v != null) {
          v.enabled = postTo[type] == true;
          savePostSetting(v);
        }
      }
    
    } else {
      alert(`${errors.join(', ')}に投稿できませんでした。`);
    }

    posting = false;

  };  

  const postToMastodon = async (text: string): Promise<boolean> => {
    try {
      const settings = postSettings.mastodon!;
      const MASTODON_HOST = settings.server;
      const ACCESS_TOKEN = settings.access_token_response.access_token;
      const status = text;
      const res = await fetch(`https://${MASTODON_HOST}/api/v1/statuses`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
      } else {
        return false;
      }
      return true;       
    } catch (error) {
      console.error(`postToMastodon -> error:`, error);
      return false;       
    }
  };  

  // RichTextからURLを取得する
  async function findUrlInText(rt: RichText): Promise<string | null> {
    if ((rt?.facets?.length ?? 0) < 1) return null;
    for (const facet of rt?.facets ?? []) {
      if (facet.features.length < 1) continue;
      for (const feature of facet.features) {
        if (feature.$type != "app.bsky.richtext.facet#link") continue;
        else if (feature.uri == null) continue;
        return feature.uri as string;
      }
    }
    return null;
  }

  const postToBlueSky = async (text: string, checkin: any): Promise<boolean> => {
    try {
      const agent = new BskyAgent({
        service: 'https://bsky.social',
      });
  
      // resume session


      const res = await agent.resumeSession(postSettings.bluesky?.data?.sessionData!);

      // refresh tokens
      await agent.refreshSession();
      postSettings.bluesky = { type: 'bluesky', title: 'BlueSky', enabled: true, data: { sessionData: agent.session as AtpSessionData } };
      savePostSetting(postSettings.bluesky);


      // creating richtext
      const rt = new RichText({
        text,
      });
  
      await rt.detectFacets(agent) // automatically detects mentions and links

      const embed = await (async () => {
        const uri =  await findUrlInText(rt);
        if (uri == null) return undefined;

        // fetchで画像データを取得
        const res = await fetch('/swarm_ogp_image.png');
        const buffer = await res.arrayBuffer();
        
        const ogInfo = {
          siteUrl: uri,
          type: 'getswarm:checkin',
          description: `${checkin?.venue?.categories?.[0]?.name ?? ''} in ${checkin?.appAddress ?? ''}`,
          title: checkin?.venue?.name ?? 'no name',
          imageData: new Uint8Array(buffer),
        };

        // 画像をアップロードしてIDを取得
        const uploadedRes = await agent.uploadBlob(ogInfo.imageData, {
          encoding: "image/jpeg",
        });

        // OGP 付きで投稿
        return {
          $type: 'app.bsky.embed.external',
          external: {
            uri,
            thumb: {
              $type: "blob",
              ref: {
                $link: uploadedRes.data.blob.ref.toString(),
              },
              mimeType: uploadedRes.data.blob.mimeType,
              size: uploadedRes.data.blob.size,
            },            
            title: ogInfo.title,
            description: ogInfo.description,
          }
        }      
      })();



      const postRecord = {
        $type: 'app.bsky.feed.post',
        text: rt.text,
        facets: rt.facets,
        createdAt: new Date().toISOString(),
        embed,
      };
  
      await agent.post(postRecord);       
      return true;
    } catch (error) {
      console.error(`postToBlueSky -> error:`, error);
      return false;
    }
  }; 

  const postToTwritter = async (text: string): Promise<boolean> => {
    try {
      const settings = postSettings.twitter!;
      const refresh_token = settings.access_token_response.refresh_token;

      const res = await fetch(`${Config.API_ENDPOINT}/twitter_post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ refresh_token, text }),
      });

      if (res.ok) {
        const resJson = await res.json();
        console.log(`FIXME h_oku 後で消す  -> postToTwritter -> resJson:`, resJson);
        settings.access_token_response.refresh_token = resJson.refresh_token;
        savePostSetting(settings);
      } else {
        return false;
      }
      return true;       
    } catch (error) {
      console.error(`postToMastodon -> error:`, error);
      return false;       
    }
  };    

  const onChangePostSettings = () => {
    postSettings.mastodon = loadPostSetting('mastodon');
    postSettings.bluesky = loadPostSetting('bluesky');
    postSettings.twitter = loadPostSetting('twitter');

    Object.entries(postTo).forEach(([k, v]) => {
      postTo[k as SettingType] = postSettings?.[k as SettingType]?.enabled ?? false;
    });
  };
</script>


{#if loading}
  <span class="loading">loading..</span>
{:else}

  <div class="d-flex flex-column gap-2">
    <div class="form-check mb-0 d-flex flex-row align-items-start gap-1">
      <input class="mt-1 form-check-input" type="checkbox" bind:checked={postTo.mastodon} id="mastodon" disabled={postSettings.mastodon == null}>
      <div class="w-100">
        <MastodonConnection on:onChange={onChangePostSettings} />
      </div>
    </div>
    <div class="form-check mb-0 d-flex flex-row align-items-start gap-1">
      <input class="mt-1 form-check-input" type="checkbox" bind:checked={postTo.bluesky} id="bluesky" disabled={postSettings.bluesky == null}>
      <div class="w-100">
        <BlueSkyConnection on:onChange={onChangePostSettings} />
      </div>
    </div>
    <div class="form-check mb-0 d-flex flex-row align-items-start gap-1">
      <input class="mt-1 form-check-input" type="checkbox" bind:checked={postTo.twitter} id="twitter" disabled={postSettings.twitter == null}>
      <div class="w-100">
        <TwitterConnection on:onChange={onChangePostSettings} />
      </div>
    </div>
  </div>


  <div class="checkin_items">
    {#each checkins as x, i}
    <div class="checkin_item">
      <span class="venue_name">{x.venue.name}</span>
      <span class="venue_address">{x.appAddress}</span>
      <span class="checkin_at">{new Date(x.createdAt * 1000).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</span>

      {#if x.shout != null}
        <span class="shout">「{x.shout}」</span>
      {/if}

      {#if x.appPrivate}
        <span class="share_private">非公開</span>
      {:else}
      <div class="d-flex flex-row gap-2">
        <button class="share_button" on:click="{() => copyToClipboard(x)}">
          {title}
        </button>
        
        {#if Array.from(Object.values(postTo)).some(x => x)}
        <button class="share_button" on:click="{() => post(x)}" disabled={posting || Array.from(Object.values(postTo)).every(x => !x)}>
          <div class="d-flex flex-row align-items-center gap-1">
            {#if postSettings.mastodon != null && postTo.mastodon}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16">
              <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
            </svg>
            {/if}
            {#if postSettings.bluesky != null && postTo.bluesky}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3.268 64 68.414" width="16" height="16"><path fill="currentColor" d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z"/></svg>
            {/if}
            {#if postSettings.twitter != null && postTo.twitter}            
            <svg style="margin-top: -2px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
            {/if}

            <span>Post</span>
          </div>
        </button>
        {/if}
        
      </div>
      {/if}
    </div>  
    {/each}  
  </div>
{/if}



<div class="footer">
  <button class="btn btn-outline-primary btn-sm mb-2" on:click="{disconnect}">Disconnect</button>
</div>
