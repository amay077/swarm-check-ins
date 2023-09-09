
const config_dev = {
  CLIENT_ID: 'JXKR3OYSVKYPR4YSIYFUXUASGG2SXDIR1I2XDLIWIAMUK2ES',
  REDIRECT_URI: 'http://localhost:8080/#/auth',
  API_ENDPOINT: `http://localhost:9999/.netlify/functions`,
}

const config_prod = {
  CLIENT_ID: 'UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU',
  REDIRECT_URI: 'https://amay077.github.io/swarm-check-ins/#/auth',
  API_ENDPOINT: `https://swarm-check-ins-api.netlify.app/.netlify/functions`,
}

export const Config = import.meta.env.MODE == 'production' ? config_prod : config_dev;