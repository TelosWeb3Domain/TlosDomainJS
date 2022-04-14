
const Web3 = require('web3');

const contractJSON = require('contract/contractMain.json');

const abi = contractJSON.abi;

const config = 
{
	testnet: "",
	mainnet: "",
	contractTestnet: "",
	contractMainnet: "",
	keys:['avatar','twitter']
}

var SDK = function (options) {
	
	const web3 = new Web3(new Web3.providers.HttpProvider(config.testnet));
	
	const contractAddress = config.contractTestnet;
	
	const func = new Object();
	
	func.balance => async (address) => 
	{
	
		const contractFirst = new web3.eth.Contract(abi, config.contractAddress);
		const balance = await contractFirst.methods.getOwner(domain).call();
		return balance;
	}
	
	
	func.getOwner => async (domain) => 
	{
		const contractFirst = new web3.eth.Contract(abi, config.contractAddress);
		const ownerAddress = await contractFirst.methods.getOwner(domain).call();
		return ownerAddress;
	}
	
	func.getDomain => async (address) => 
	{
	
		const contractFirst = new web3.eth.Contract(abi, config.contractAddress);
		const defaultDomain = await contractFirst.methods.reverseOf(address).call();
		return defaultDomain;
	}
  
    func.getDomains => async (address) => 
	{
	
		const contractFirst = new web3.eth.Contract(abi, config.contractAddress);
		const domains = await contractFirst.methods.reverseOf(address).call();
		return domains;
	}
	
	func.getMetadata => async (key, domain) => 
	{
	
		const contractFirst = new web3.eth.Contract(abi, config.contractAddress);
		const tokenId = await contractFirst.methods.genTokenId(domain).call();
		const value = await contractFirst.methods.get(key, tokenId);
		return value;
	}
	
	func.getMetadatas => async (keys, domain) => 
	{
	
		const contractFirst = new web3.eth.Contract(abi, contractAddress);
		const tokenId = await contractFirst.methods.genTokenId(domain).call();
		const values = await contractFirst.methods.getMany(keys, tokenId);
		return values;
	}
	
	func.hashname => async (domain) => 
	{
	
		const contractFirst = new web3.eth.Contract(abi, config.contractTestnet);
		const hash = await contractFirst.methods.hashname(domain).call();
		return hash;
	}
	
	return func;	
}

module.exports = SDK;
