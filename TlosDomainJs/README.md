## JavaScript SDK for integrating

### Install Package

```
npm install TlosDomainJS
```
Need to install web3js library:
```
npm install web3
```

### Begin

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
let info = await sdk.getDomain(address);

// Get all domain from address
var address = ''
let infos = await sdk.getDomains(address);

// Get metadata
var key = 'avatar';
let value = await sdk.getMetadata(key, domain);

// Get multi metadata
var keys = ['avatar','twitter'];
let values = await sdk.getMetadatas(keys, domain);

// hashname
let hashname = await sdk.hashname(domain);

```
