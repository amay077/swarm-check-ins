<script lang="ts">
  import { Config } from "../config";

  const mastodonTargets = Object.values(Config.post_targets.mastodon);
  let mastodonServer = 'mastodon.cloud';
  let mastodonCode = '';
  export let mastodonAccessToken: string = localStorage.getItem('sci_mastodonAccessToken') ?? '';

  const onConnectToMastodon = () => {
    const settings = mastodonTargets.find(x => x.server === mastodonServer);
    if (settings == null) {
      console.error(`onApplyMastodonAccessToken -> settings:`, settings);
      return;
    }
    const url = `https://${settings.server}/oauth/authorize?client_id=${settings.MASTODON_CLIENT_ID}&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=write`;
    
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

    const res = await fetch(`https://${settings.server}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `client_id=${settings.MASTODON_CLIENT_ID}&client_secret=${settings.MASTODON_CLIENT_SECRET}&grant_type=authorization_code&code=${mastodonCode}&redirect_uri=urn:ietf:wg:oauth:2.0:oob`,
    });

    if (!res.ok) {
      console.error(`FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> res:`, res);
      return;
    }
    
    const resJson = await res.json();
    localStorage.setItem('sci_mastodonAccessToken', JSON.stringify({ server: settings.server, access_token_response: resJson }));
    mastodonAccessToken = JSON.stringify(resJson);

    alert('Mastodon に接続しました。toot ボタンで投稿できます。');
  };
</script>

{#if (mastodonAccessToken?.length ?? 0) > 0}
<div class="d-flex flex-row gap-2 align-items-center">
  <span>接続済み</span>
  <button class="btn btn-sm btn-outline-primary" style="width: 60px;" on:click={() => {
    localStorage.removeItem('sci_mastodonAccessToken');
    mastodonAccessToken = '';
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
