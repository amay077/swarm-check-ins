
const config_dev = {
  CLIENT_ID: 'JXKR3OYSVKYPR4YSIYFUXUASGG2SXDIR1I2XDLIWIAMUK2ES',
  REDIRECT_URI: 'http://localhost:8080/#/auth',
  API_ENDPOINT: `http://localhost:9999/.netlify/functions`,

  post_targets: {
    mastodon: {
      mastodon_cloud: {
        name: 'Mastodon.cloud(dev)',
        server: 'mastodon.cloud',
        MASTODON_CLIENT_ID: 'flr82v9ah3bNegi3f6CUEvG7Vrz02HtIJzqswztaFnQ',
        MASTODON_CLIENT_SECRET: 'rpWnOOmhOnd4oHscuEvd55NhuG1gqc4S_7uXsFHsJr0',
      },
      mstdn_jp: {
        name: 'mstdn.jp(dev)',
        server: 'mstdn.jp',
        MASTODON_CLIENT_ID: 'gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw',
        MASTODON_CLIENT_SECRET: 'FlJm2oIaLBEJi4uWGk51ke_VPiwYB5lM5vCB5J5Cf9E',
      }
    }
  }
}

const config_prod = {
  CLIENT_ID: 'UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU',
  REDIRECT_URI: 'https://amay077.github.io/swarm-check-ins/#/auth',
  API_ENDPOINT: `https://swarm-check-ins-api.netlify.app/.netlify/functions`,

  post_targets: {
    mastodon: {
      mastodon_cloud: {
        name: 'Mastodon.cloud',
        server: 'mastodon.cloud',
        MASTODON_CLIENT_ID: '8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4',
        MASTODON_CLIENT_SECRET: 'xW_xpjTdNurUBS-aGMrkx-zsxUeuboaOhs4VufE1LEc',
      },
      mstdn_jp: {
        name: 'mstdn.jp',
        server: 'mstdn.jp',
        MASTODON_CLIENT_ID: 'gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw',
        MASTODON_CLIENT_SECRET: 'FlJm2oIaLBEJi4uWGk51ke_VPiwYB5lM5vCB5J5Cf9E',
      }
    }
  }}

export const Config = import.meta.env.MODE == 'production' ? config_prod : config_dev;