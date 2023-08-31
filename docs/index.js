const body = document.getElementById('body');

const authHtml = `
<div class="connect_container">
  <button class="connect_button" onclick="doAuth()">Connect to Foursquare</button>
</div>
`;

function doAuth() {
  const authURL = `https://foursquare.com/oauth2/authenticate?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  window.location.href = authURL;
};

function disconnect() {
  // accessToken を localStorage から削除する
  localStorage.removeItem('sci_accessToken');
  window.location.href = './index.html';
};

async function copyToClipboard(id, venue_name, address) {
  const checkinDetail = await fetch(`https://api.foursquare.com/v2/checkins/${id}?oauth_token=${accessToken}&v=20230823`)
  .then(response => response.json());
  console.log(`FIXME h_oku 後で消す ${this.constructor.name} -> copyToClipboard -> checkinDetail:`, checkinDetail);


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
    console.log(e.message);
  }
}

// localstorage からアクセストークンを取得する
const accessToken = localStorage.getItem('sci_accessToken');

async function makeContents() {
  // アクセストークンを使用してチェックイン一覧を取得する
  const response = await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${accessToken}&v=20230823&limit=100`);
  if (!response.ok) {
    disconnect();
    return;
  }
  const data = await response.json();

  const checkins = data.response.checkins.items;
  
  const title = window.navigator.canShare ? `Share...` : 'Copy to clipboard';
  
  return `
  <div class="checkin_items">
    ${checkins.map(x => `
    <div class="checkin_item">
      <span class="venue_name">${x.venue.name}</span>
      <span class="venue_address">${x.venue.location.formattedAddress[1]}</span>
      <span class="checkin_at">${new Date(x.createdAt * 1000).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</span>
      <button class="share_button" onclick="copyToClipboard('${x.id}', '${x.venue.name}', '${x.venue.location.formattedAddress[1]}')">${title}</button>
    </div>`).join('')}
  </div>
  <div class="footer">
    <button class="disconnect_button" onclick="disconnect()">Disconnect</button>
  </div>

  `;
}

(async () => {
  body.innerHTML = accessToken == null ? authHtml : (await makeContents());
})();


