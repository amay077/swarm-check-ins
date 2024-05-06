<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Config } from "../config";
  import { deletePostSetting, loadPostSetting, savePostSetting } from "./func";

  const dispatch = createEventDispatcher<{ onChange: void }>();

  let expandedMastodon = false;

  const mastodonTargets = Object.values(Config.post_targets.mastodon);
  let mastodonServer = 'mastodon.cloud';
  let mastodonCode = '';

  let postSettings = loadPostSetting('mastodon');

  const onConnectToMastodon = () => {
    const settings = mastodonTargets.find(x => x.server === mastodonServer);
    if (settings == null) {
      console.error(`onApplyMastodonAccessToken -> settings:`, settings);
      return;
    }
    const url = `https://${settings.server}/oauth/authorize?client_id=${settings.client_id}&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=write`;
    
    // url を別タブで開く
    window.open(url, '_blank');
  };

  const onApplyMastodonAccessToken = async () => {
    console.log(`onApplyMastodonAccessToken -> mastodonCode:`, mastodonCode);

    const settings = mastodonTargets.find(x => x.server === mastodonServer);
    if (settings == null) {
      console.error(`onApplyMastodonAccessToken -> settings:`, settings);
      return;
    }

    const res = await fetch(`${Config.API_ENDPOINT}/mastodon_token?server=${settings.server}&code=${mastodonCode}`);

    if (!res.ok) {
      console.error(`failed to fetch:`, res);
      return;
    }
    
    const resJson = await res.json();
    postSettings = { type: 'mastodon', title: 'Mastodon', enabled: true, server: settings.server, access_token_response: resJson };
    savePostSetting(postSettings);
    dispatch('onChange');

    alert('Mastodon に接続しました。');
  };
</script>

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
  <div class="p-1">

    {#if postSettings != null}
    <div class="d-flex flex-row gap-2 align-items-center">
      <span>接続済み</span>
      <button class="btn btn-sm btn-outline-primary" style="width: 60px;" on:click={() => {
        postSettings = null;
        deletePostSetting('mastodon');
        dispatch('onChange');
      }}>切断</button>
    </div>
    {:else}
    <div class="d-flex flex-column gap-1">
      <div class="d-flex flex-column gap-1">
        <span>1.Mastodon サーバーに接続</span>
        <div class="d-flex flex-row gap-1">
          <select class="form-select form-select-sm" bind:value={mastodonServer} >
            {#each mastodonTargets as m}
              <option value={m.server}>{m.name} (https://{m.server})</option>
            {/each}
          </select>
          <button class="btn btn-sm btn-primary" style="width: 60px;" on:click={onConnectToMastodon}>接続</button>
        </div>
      </div>
      <div class="d-flex flex-column gap-1">
        <span>2.認証コードを貼り付けて設定</span>
        <div class="d-flex flex-row gap-1">
          <input class="form-control form-control-sm" type="text" bind:value={mastodonCode}>
          <button class="btn btn-sm btn-primary" disabled={mastodonCode?.length <= 0} style="width: 60px;" on:click={onApplyMastodonAccessToken}>設定</button>
        </div>
      </div>
    </div>
    {/if}
    

  </div>
  {/if}
</div>

