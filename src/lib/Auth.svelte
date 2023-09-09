<script lang="ts">
  import { Config } from "../config";


  // const CLIENT_ID = 'UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU';
  // const REDIRECT_URI = 'https://amay077.github.io/swarm-check-ins/auth.html';
  // const API_ENDPOINT = `https://swarm-check-ins-api.netlify.app/.netlify/functions`;

  // const CLIENT_ID = 'JXKR3OYSVKYPR4YSIYFUXUASGG2SXDIR1I2XDLIWIAMUK2ES';
  // const REDIRECT_URI = 'http://localhost:8080/auth';
  // const API_ENDPOINT = `http://localhost:9999/.netlify/functions`;

  const doAuth =() => {
    const authURL = `https://foursquare.com/oauth2/authenticate?client_id=${Config.CLIENT_ID}&response_type=code&redirect_uri=${Config.REDIRECT_URI}`;
    window.location.href = authURL;
  };

</script>

<div class="connect_container">
  <button class="connect_button" on:click={doAuth}>Connect to Foursquare</button>
</div>
