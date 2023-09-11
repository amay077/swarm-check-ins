<script lang="ts">
  import { onMount } from "svelte";

  // localstorage からアクセストークンを取得する
  const accessToken = localStorage.getItem('sci_accessToken');

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

</script>


{#if loading}
  <span class="loading">loading..</span>
{:else}    
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
        <button class="share_button" on:click="{() => copyToClipboard(x)}">{title}</button>
      {/if}
    </div>  
    {/each}  
  </div>
{/if}



<div class="footer">
  <button class="disconnect_button" on:click="{disconnect}">Disconnect</button>
</div>
