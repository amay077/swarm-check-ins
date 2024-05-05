<script lang="ts">
  import { Config } from './config';
  import Auth from './lib/Auth.svelte';
  import MainContent from './lib/MainContent.svelte';

  let accessToken = localStorage.getItem('sci_accessToken');
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code'); 
  const state = urlParams.get('state'); 
  console.log(`FIXME h_oku 後で消す  -> state:`, state);

  if (accessToken != null) {

  
  } else if (state == null && code) {
    (async () => {
      const res = await fetch(`${Config.API_ENDPOINT}/token?code=${code}`)
      const jsonData = await res.json();
    
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      params.delete('code');
      url.hash = '';
      url.search = params.toString();
      history.replaceState(null, '', url.toString());

      accessToken = jsonData.access_token;
    
      if (accessToken == null) {
        return;
      }
    
      // accessToken を localStorage に保存する
      localStorage.setItem('sci_accessToken', accessToken);
    })();

  } else {

      // accessToken を localStorage から削除する
    localStorage.removeItem('sci_accessToken');

    // // index.html へ移動する
    // window.location.href = './';
  }

</script>

<main>
  <h1 class="mt-2">SHARE I'm AT</h1>

  {#if accessToken == null}
    {#if code == null}
	    <Auth />
    {:else if state == null}    
      <span>Connecting...</span>
    {/if}
  
  {:else}    
    <MainContent />
  {/if}

</main>
