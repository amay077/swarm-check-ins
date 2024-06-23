<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Config } from "../config";
  import { deletePostSetting, loadPostSetting, savePostSetting } from "./func";

  const dispatch = createEventDispatcher<{ onChange: void }>();

  let expanded = false;

  let postSettings = loadPostSetting('twitter');

  let oAuthToken = '';
  let pinCode = '';
  let oAuthData = '';

  const onConnectToTwitter = async () => {

    const res = await fetch(`${Config.API_ENDPOINT}/twitter_auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({ }),
    });

    const { url, oauth_token, data } = await res.json();
    oAuthToken = oauth_token;
    oAuthData = data;

    // const redirect_uri = encodeURIComponent(Config.post_targets.twitter.redirect_uri);
    // const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${Config.post_targets.twitter.client_id}&redirect_uri=${redirect_uri}&scope=tweet.read%20tweet.write%20users.read%20offline.access&state=twitter_callback&code_challenge=challenge&code_challenge_method=plain`;
    
    // url を別タブで開く
    window.open(url, '_blank');
  };

  export async function onApplyTwitterPinCode() {

    const res = await fetch(`${Config.API_ENDPOINT}/twitter_token?code=${pinCode}&oauth_token=${oAuthToken}&data=${oAuthData}`);
    pinCode = '';

    if (res.ok) {
      const data = await res.json();
      postSettings = { type: 'twitter', title: 'Twitter', enabled: true, token_data: { 
        token: data.token,
      }};
      savePostSetting(postSettings);
      dispatch('onChange');
      alert('Twitter に接続しました。');
    } else {
      console.error(`twitter 接続エラー -> res:`, res);
      alert('Twitter に接続できませんでした。');
    }
  }
</script>

<div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="d-flex flex-row gap-1 align-items-center" style="cursor: pointer;"  on:click={() => {
    expanded = !expanded;
  }}>
    <h5 class="mb-0">Twitter</h5>
    {#if !expanded}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
    {/if}
  </div>
  {#if expanded}
  <div class="p-1">

    {#if postSettings != null}
    <div class="d-flex flex-row gap-2 align-items-center">
      <span>接続済み</span>
      <button class="btn btn-sm btn-outline-primary" style="width: 60px;" on:click={() => {
        postSettings = null;
        deletePostSetting('twitter');
        dispatch('onChange');
      }}>切断</button>
    </div>
    {:else}
    <div class="d-flex flex-column gap-1">
      <div class="d-flex flex-column gap-1">
        <div class="d-flex flex-row align-items-center gap-1">
          <span>1.</span>
          <button class="btn btn-sm btn-primary" style="width: 60px;" on:click={onConnectToTwitter}>接続</button>
        </div>
      </div>
      <div class="d-flex flex-column gap-1">
        <span>2.PINコードを貼り付けて設定</span>
        <div class="d-flex flex-row gap-1">
          <input class="form-control form-control-sm" type="text" bind:value={pinCode}>
          <button class="btn btn-sm btn-primary" disabled={pinCode?.length <= 0} style="width: 60px;" on:click={onApplyTwitterPinCode}>設定</button>
        </div>
      </div>
    </div>
    {/if}
    

  </div>
  {/if}
</div>

