'use strict'

const rdp = require('./rdp')
const { RDP_HOST, RDP_USER, RDP_PASSWORD, RDP_DOMAIN } = process.env
if (!RDP_HOST || !RDP_USER || !RDP_PASSWORD) {
  throw new Error('Set RDP_HOST, RDP_USER and RDP_PASSWORD for this opt-in example')
}

rdp.createClient({
  domain: RDP_DOMAIN || '',
  userName: RDP_USER,
  password: RDP_PASSWORD,
  enablePerf: true,
  autoLogin: true,
  decompress: false,
  screen: { width: 800, height: 600 },
  locale: 'en',
  logLevel: 'ERROR'
})
  .on('connect', () => console.log('RDP connection established'))
  .on('close', () => console.log('RDP connection closed'))
  .on('error', () => {
    console.error('RDP connection failed')
    process.exitCode = 1
  })
  .connect(RDP_HOST, 3389)
