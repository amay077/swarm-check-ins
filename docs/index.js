const body = document.getElementById('body');

const authHtml = `<button class="connect_button" onclick="doAuth()">Authenticate with Foursquare</button>`;

function doAuth() {
  const CLIENT_ID = '131SMM3B5UEI3AAM1LO5LHK5W4TWZUWZYNUXTS3CHGFTLJXT';
  const REDIRECT_URI = 'https://amay077.github.io/swarm-check-ins/auth.html'; // 例: http://yourwebsite.com/callback
  const authURL = `https://foursquare.com/oauth2/authenticate?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  window.location.href = authURL;
};

function disconnect() {
  // accessToken を localStorage から削除する
  localStorage.removeItem('sci_accessToken');
  window.location.href = './index.html';
};

async function copyToClipboard(id, venue_name, address) {
  console.log(`FIXME h_oku 後で消す ${this.constructor.name} -> checkinId:`, id);

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
    await window.navigator.share({
      title: 'Share to ...',
      text: `I'm at ${venue_name} in ${address}`,
      url: checkinDetail.response.checkin.checkinShortUrl,
    });
  } catch (e) {
    console.log(e.message);
  }
}

// localstorage からアクセストークンを取得する
const accessToken = localStorage.getItem('sci_accessToken');

async function makeContents() {
  // アクセストークンを使用してチェックイン一覧を取得する
  const response = await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${accessToken}&v=20230823&limit=100`);
  const data = await response.json();

  const checkins = data.response.checkins.items;
  
  const title = window.navigator.canShare ? `Share...` : 'Copy to clipboard';
  
  return `
  <div class="header">
    <button class="disconnect_button" onclick="disconnect()">Disconnect</button>
  </div>
  
  <div class="checkin_items">
    ${checkins.map(x => `
    <div class="checkin_item">
      <span class="venue_name">${x.venue.name}</span>
      <span class="venue_address">${x.venue.location.formattedAddress[1]}</span>
      <span class="checkin_at">${new Date(x.createdAt * 1000).toISOString()}</span>
      <button class="share_button" onclick="copyToClipboard('${x.id}', '${x.venue.name}', '${x.venue.location.formattedAddress[1]}')">${title}</button>
    </div>`).join('')}
  </div>`;
}

(async () => {
  body.innerHTML = accessToken == null ? authHtml : (await makeContents());
})();


