<script lang="ts">
  import { onMount } from "svelte";
  import MastodonConnection from "./MastodonConnection.svelte";

  // localstorage からアクセストークンを取得する
  const accessToken = localStorage.getItem('sci_accessToken');

  let mastodonAccessToken: string = localStorage.getItem('sci_mastodonAccessToken') ?? '';
  let expandedMastodon = false;


  const title = window.navigator?.canShare != null ? `Share...` : 'Copy to clipboard';
  let checkins: any[] = [];

  let loading = true;

  onMount(async () => {
    console.log(`onMount`);

    try {
      
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

  const toot = (checkin: any) => {
    (async () => {
      const checkinDetail = await fetch(`https://api.foursquare.com/v2/checkins/${checkin.id}?oauth_token=${accessToken}&v=20230823`)
        .then(response => response.json());

      const shout = checkin.shout == null ? '' : `${checkin.shout} / `;
      
      const text = `${shout}I'm at ${checkin.venue.name} in ${checkin.appAddress} ${checkinDetail.response.checkin.checkinShortUrl}`;

      const settings = JSON.parse(localStorage.getItem('sci_mastodonAccessToken') ?? '{}')
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
        console.log(`toot -> res:`, res);
        alert('投稿しました。');
      } else {
        console.error(`toot -> res:`, res);
        alert(`投稿できませんでした。(${res.status})`);
      }
            
    })();
  };  
</script>


{#if loading}
  <span class="loading">loading..</span>
{:else}

  <div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="d-flex flex-row gap-1 align-items-center" style="cursor: pointer;"  on:click={() => {
      expandedMastodon = !expandedMastodon;
    }}>
      <h5 class="mb-0">Mastodon</h5>
      {#if !expandedMastodon}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
      {/if}
    </div>
    {#if expandedMastodon}
    <div class="p-2">
      <MastodonConnection />
    </div>
    {/if}
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

        {#if (mastodonAccessToken?.length ?? 0) > 0}
        <button class="share_button" on:click="{() => toot(x)}">
          <div class="d-flex flex-row align-items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16">
              <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
            </svg>
            <span>Toot</span>
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
  <button class="disconnect_button" on:click="{disconnect}">Disconnect</button>
</div>
