<script lang="ts">
  import { onMount } from "svelte";

  // localstorage からアクセストークンを取得する
  const accessToken = localStorage.getItem('sci_accessToken');

  const title = window.navigator?.canShare != null ? `Share...` : 'Copy to clipboard';
  let checkins: any[] = [];

  onMount(async () => {
    console.log(`onMount`);

    // アクセストークンを使用してチェックイン一覧を取得する
    const response = await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${accessToken}&v=20230823&limit=100`);
    if (!response.ok) {
      disconnect();
      return;
    }
    const data = await response.json();
    checkins = data.response.checkins.items;

  });  

  const disconnect = () => {
    // accessToken を localStorage から削除する
    localStorage.removeItem('sci_accessToken');
    window.location.href = '/';    
  };

  const copyToClipboard = (id: string, venue_name: string, address: string) => {

    (async () => {
      const checkinDetail = await fetch(`https://api.foursquare.com/v2/checkins/${id}?oauth_token=${accessToken}&v=20230823`)
        .then(response => response.json());

      if (!window.navigator.canShare) {
        const text = `I'm at ${venue_name} in ${address} ${checkinDetail.response.checkin.checkinShortUrl}`;
        navigator.clipboard.writeText(text);
        alert('クリップボードにコピーしました。');
        return;
      }

      try {
        const text = `I'm at ${venue_name} in ${address} ${checkinDetail.response.checkin.checkinShortUrl}`;
        await window.navigator.share({ text });
      } catch (e) {
        console.log(e);
      }
    })();
  };

</script>


<div class="checkin_items">
  {#each checkins as x, i}
  <div class="checkin_item">
    <span class="venue_name">{x.venue.name}</span>
    <span class="venue_address">{x.venue.location.formattedAddress[1]}</span>
    <span class="checkin_at">{new Date(x.createdAt * 1000).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</span>
    <button class="share_button" on:click="{() => copyToClipboard(x.id, x.venue.name, x.venue.location.formattedAddress[1])}">{title}</button>
  </div>  
  {/each}  
</div>
<div class="footer">
  <button class="disconnect_button" on:click="{disconnect}">Disconnect</button>
</div>
