
const config_dev = {
  CLIENT_ID: 'JXKR3OYSVKYPR4YSIYFUXUASGG2SXDIR1I2XDLIWIAMUK2ES',
  REDIRECT_URI: 'http://localhost:8080/#/auth',
  API_ENDPOINT: `http://localhost:9000/.netlify/functions`,

  post_targets: {
    mastodon: {
      mastodon_cloud: {
        name: 'Mastodon.cloud(dev)',
        server: 'mastodon.cloud',
        client_id: '8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4',
      },
      mstdn_jp: {
        name: 'mstdn.jp(dev)',
        server: 'mstdn.jp',
        client_id: 'gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw',
      },
    },
    twitter: {
      client_id: 'cFdITnRJb2t6Z1FYTktjUmU0WFg6MTpjaQ',
      redirect_uri: 'http%3A%2F%2Flocalhost%3A8080',
    }
  }
}

const config_prod = {
  CLIENT_ID: 'UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU',
  REDIRECT_URI: 'https://amay077.github.io/swarm-check-ins/#/auth',
  API_ENDPOINT: `https://pppost-api.netlify.app/.netlify/functions`,

  post_targets: {
    mastodon: {
      mastodon_cloud: {
        name: 'Mastodon.cloud',
        server: 'mastodon.cloud',
        client_id: '8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4',
      },
      mstdn_jp: {
        name: 'mstdn.jp',
        server: 'mstdn.jp',
        client_id: 'gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw',
      }
    }, 
    twitter: {
      client_id: 'cFdITnRJb2t6Z1FYTktjUmU0WFg6MTpjaQ',
      redirect_uri: 'https%3A%2F%2Famay077.github.io%2Fswarm-check-ins',
    }
  }}

export const Config = import.meta.env.MODE == 'production' ? config_prod : config_dev;