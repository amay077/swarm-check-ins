<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Config } from "../config";
  import { deletePostSetting, loadPostSetting } from "./func";

  const dispatch = createEventDispatcher<{ onChange: void }>();

  let expanded = false;

  let postSettings = loadPostSetting('twitter');

  const onConnectToTwitter = () => {

    const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${Config.post_targets.twitter.client_id}&redirect_uri=${Config.post_targets.twitter.redirect_uri}&scope=tweet.read%20tweet.write%20users.read%20offline.access&state=twitter_callback&code_challenge=challenge&code_challenge_method=plain`;
    
    // url をこのタブで開く
    window.open(url, '_self');
  };
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
        <div class="d-flex flex-row gap-1">
          <button class="btn btn-sm btn-primary" style="width: 60px;" on:click={onConnectToTwitter}>接続</button>
        </div>
      </div>
    </div>
    {/if}
    

  </div>
  {/if}
</div>

