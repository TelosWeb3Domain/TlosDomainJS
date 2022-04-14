## Javascript for Tlos Domains

**Step 1: insert web3js script to head tag**

```
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@3.0.0-rc.5/dist/web3.min.js"></script>
```

**Step 2: Connect network**

```
if (!window.ethereum) {
   return;
}

const rpcURL = 'https://testnet.telos.net/evm';

var web3Provider = new Web3.providers.HttpProvider(rpcURL);

window.web3 = new Web3(web3Provider);
```
 
**Step 3: Load ABI Contract**

```
const fetchABI = async () =>
{
		const d = new Date();
		var response = await fetch('https://tlos.domains/contract/Web3Domains.json');
		const result = await response.json();
		const abi = result.abi;
		return abi;
};
```

**Step 4: Connect Contract**

```
var contactAddress = '';

var abi = await fetchABI();
			
var contractLoad = new web3.eth.Contract(
	abi,
	contactAddress
);
```

**Get Owner Address by domain name**

```
var owner = '';
var domain = 'telos.tlos';

owner = await contractLoad.methods.getOwer(domain).call();

console.log(owner);
```


**Get domain default from address**

```
var domain = '';
var currentAddress = '';

domain = await contractLoad.methods.reverseOf(currentAddress).call();

console.log(domain);
```

**Get Metatada**

```
var domain = 'telos.tlos';
var key = 'avatar';

var tokenId = await contractLoad.methods.genTokenId(domain).call();
var value = await contractLoad.methods.get(key, tokenId);

console.log(value);
```


**Get Multi Metatada**

```
var domain = 'telos.tlos';
var keys = ['website','twitter'];

var tokenId = await contractLoad.methods.genTokenId(domain).call();
var values = await contractLoad.methods.getMany(keys, tokenId);

console.log(values);
```

**hashname**

```
var domain = 'telos.tlos';

var hashname = await contractLoad.methods.hashname(domain).call();

console.log(hashname);
```




