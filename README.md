# Anubis legacy RDP.js source

This is the GPL-3.0 RDP.js component originally forked through
[electerm/rdpjs](https://github.com/electerm/rdpjs) from
[mai1x9/rdpjs](https://github.com/mai1x9/rdpjs). The original license and source
notices are retained.

The current Anubis Desktop and Web applications use `ironrdp-wasm`; this legacy
JavaScript implementation is **not** a dynamically loaded Desktop plugin or a
replacement for that RDP backend. It is maintained here as an independently
available source component.

```sh
git clone https://github.com/Anubis-Security-Tool/anubis-rdpjs.git
cd anubis-rdpjs
npm ci --registry=https://npm.anubis.locker/
```

`require('./rdp')` exposes the original library API. The opt-in `node test.js`
connection example requires `RDP_HOST`, `RDP_USER` and `RDP_PASSWORD` in the
environment; `RDP_DOMAIN` is optional. It has no embedded credentials or default
remote target. Run it only against a host you are authorized to access.

This repository does not establish a newly published npm package or tested
interoperability with every RDP server. Keep this GPL component's redistribution
and licensing separate from the MIT-licensed application.
