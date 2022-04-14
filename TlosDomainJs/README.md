## JavaScript SDK for integrating

### Install Package

```
npm i TlosDomainJS
```

### Setup

```
const tlos = require('TlosDomainJS');

const options = 
{
	testnet: "https://testnet.telos.net/evm"
}

let sdk = tlos.SDK(options);

// Resolve domain to get the address of the owner.
var domain = 'telos'
let addressInfo = await sdk.getOwner(domain);

// Get a domain default from address
var address = ''
let info = await sdk.getDomain(domain);

```
