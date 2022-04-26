# Rainbow NFT API Server
This is a simple express app that uses ethers.js to retrieve data from Rinkeby via an Alchemy RPC.  Currently set for requesting data from Rainbow NFT contract: https://rinkeby.etherscan.io/address/0xce4346e22dd8288d2971416d29e99db22385e0a4

## Setup
#### Create .env from example.env
`cp example.env .env`

#### Add Alchemy API key to .env
`ALCHEMY_KEY = XXXXXXXXXXXXXXXXXXXXXXXXXXX`

## Running
`npm install`

`npm run start`

## GET Requests
#### currentTokenId
`curl ${url}/currentTokenId`

#### totalSupply
`curl ${url}/totalSupply`

#### randomTokenURI
`curl ${url}/randomTokenURI`

## Built With

ethers-express: https://github.com/hal909/ethers-express

ethers.js https://docs.ethers.io/v5/
  
typescript:  https://www.typescriptlang.org/
  
express: https://expressjs.com/

