<script lang="ts">
  import { BskyAgent } from "@atproto/api";
  import { deletePostSetting, loadPostSetting, savePostSetting } from "./func";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ onChange: void }>();

  let expandedBlueSky = false;

  let bskyServer = 'https://bsky.social';

  let postSettings = loadPostSetting('bluesky');
  let user = postSettings?.data?.sessionData?.email ?? '';
  let password = '';
  
  const onApplyBSkySettings = async () => {
    console.log(`onApplyBSkySettings -> user:`, user);

    const agent = new BskyAgent({
      service: bskyServer
    });

    const res = await agent.login({
      identifier: user,
      password
    });

    if (res.success == false) {
      console.error(`onApplyBSkySettings -> res:`, res);
      alert('BlueSky に接続できませんでした。');
      return;
    }
    
    const sessionData = res.data;
    postSettings = { type: 'bluesky', title: 'BlueSky', enabled: true, data: { sessionData } };
    savePostSetting(postSettings);
    dispatch('onChange');
    alert('BlueSky に接続しました。');
  };
</script>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="d-flex flex-row gap-1 align-items-center" style="cursor: pointer; width: 100%;"  on:click={() => {
    expandedBlueSky = !expandedBlueSky;
  }}>
    <h5 class="mb-0">BlueSky</h5>
    {#if !expandedBlueSky}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
    {/if}
  </div>
  {#if expandedBlueSky}
  <div class="p-2">
    {#if postSettings != null}
    <div class="d-flex flex-row gap-2 align-items-center">
      <span>接続済み</span>
      <button class="btn btn-sm btn-outline-primary" style="width: 60px;" on:click={() => {
        postSettings = null;
        deletePostSetting('bluesky');
        dispatch('onChange');
      }}>切断</button>
    </div>
    {:else}
    <div class="d-flex flex-column gap-1">
      <div class="d-flex flex-column gap-1">
        <span>1.ユーザーIDとアプリパスワードを入力</span>
        <div class="d-flex flex-row gap-1">
          <input class="form-control form-control-sm" type="text" bind:value={user}>
        </div>
        <div class="d-flex flex-row gap-1">
          <input class="form-control form-control-sm" type="password" bind:value={password}>
          <button class="btn btn-sm btn-primary" disabled={user?.length <= 0 || password?.length <= 0} style="width: 60px;" on:click={onApplyBSkySettings}>接続</button>
        </div>
      </div>
    </div>
    {/if}    
  </div>
  {/if}

