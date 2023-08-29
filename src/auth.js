// 仮定: ユーザーが認証した後、リダイレクトURIにコードが含まれて返されます。
// ページのロード時にこのコードを取得してアクセストークンを要求する。
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
  (async () => {
    const res = await fetch(`https://swarm-check-ins-api.netlify.app/.netlify/functions/token?code=${code}`)
    const jsonData = await res.json();
  
    const accessToken = jsonData.access_token;
  
    if (accessToken == null) {
      return;
    }
  
    // accessToken を localStorage に保存する
    localStorage.setItem('sci_accessToken', accessToken);
  
    // index.html へ移動する
    window.location.href = './index.html';    
  })();

} else {

    // accessToken を localStorage から削除する
  localStorage.removeItem('sci_accessToken');

  // index.html へ移動する
  window.location.href = './index.html';
}

