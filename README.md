# Rainbow NFT Express Server
This is a simple express app that uses ethers.js to retrieve data from Rinkeby.  Currently set for requesting data from `https://rinkeby.etherscan.io/address/0xce4346e22dd8288d2971416d29e99db22385e0a4`

## Setup
Add Alchemy api key to .env
`ALCHEMY_KEY = XXXXXXXXXXXXXXX`

## Running
`yarn`

`yarn start`

## GET Requests | local instance
#### get currentTokenId
`curl localhost:5000/currentTokenId`

#### get totalSupply
`curl localhost:5000/totalSupply`

## Built With

ethers.js https://docs.ethers.io/v5/
  
typescript:  https://www.typescriptlang.org/
  
express: https://expressjs.com/
  
yarn: https://yarnpkg.com/
