## API Restful 

### Root Endpoint: 

https://app.tlos.domains

### Get Resolve domain
Resolve domain to get the address of the owner.

Endpoint:/api/domains/getOwner?domain=domain&network=testnet&metadata=true

**Method: GET**

**Param:**

1. domain: 'telos.tlos'
2. network: 'testnet' // mainnet default
3. metadata: true // false default return metadata along with domain information

**Return:** 
```
{
    "status": true,
    "message": "Success",
    "data": { 
        "owner": "0x37Jrh74Jdff...",
        "metadata": [
            {"key": "avatar","value":"{url}"},
            {"key": "twitter","value":"https://twitter.com/"},
            {"key": "website","value":"https://tlos.domains"},
            {"key": "btc.address","value":"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh..."},
            {"key": "eth.address","value":"0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2 ..."}
            ...
        ]
    }
}
```
### Get a domain default from address
Get a domain default from a user's address

Endpoint: /api/domains/getDomain?address=0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2&network=testnet

**Method: GET**

**Param**

1. address: '' // wallet address
2. network: 'testnet' // mainnet default

**Return:** 
```
{
    status: true,
    message: "Success",
    data:
        { 
            "domain": "",
            "setDefault":true
        }
    ]
}
```

### Get all domains owned by address
This GET method gets all the domains owned by an wallet address.

Endpoint: /api/domains/getDomains?address=0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2&network=testnet

**Method: GET**

**Param**

1. address: 0x3c16183c1c0e28f1a0cb9f8ee4b21d0db2 ...
2. network: 'testnet' // mainnet default

**Return:** 
```
{
    status: true,
    message: "Success",
    data: [
        { 
            "domain": "telos.tlos",
            "createtime": "",
            "setDefault":true
        },
        { 
            "domain": "telosevm.tlos",
            "createtime": "",
            "setDefault":false
        },
    ]
}
```

### Get Metatada
Get a value of metadata from the domain name

Endpoint: /api/domains/getMetadata?key=website,twitter&domain=telos.tlos&network=testnet

**Method: GET**

**Param**

1. keys: 'website,twitter'
2. domain: 'telos.tlos'
3. network: testnet

**Return:** 
```
{
    status: true,
    message: "Success",
    data:
        { 
            "metadata": [
                {"key": "twitter","value":"https://twitter.com/"},
                {"key": "website","value":"https://tlos.domains"}
            ]
        }
}
```

### Gen hashname
Namehash is a recursive process that can generate a unique hash for any valid domain name.

Endpoint: /api/domains/hashname?domain=hello.tlos&&network=testnet

**Method: GET**

**Param**

1. domain: 'hello.tlos'
2. network: testnet

**Return:** 
```
{
    status: true,
    message: "Success",
    data:
        { 
            "hashname": "95056584996377272172318102362430335359056670016098380788598434836875371874275"
        }
}
```
