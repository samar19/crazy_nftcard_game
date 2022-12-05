# crazy card - Online Multiplayer Web3 Meta NFT Card Game

This frist dapp about gaming for me "crazy card" blockchain application. Create your characters, create and join live battles, choose your battleground, and battle other players in real-time!

i build and deploy an online multiplayer meta web3 NFt card game powered by Avalanche create your characters create and join live battles choose your Battleground and battle other players in real time with a stunning design interactive gameplay smart wallet pairing live interaction with smart contracts and most importantly the ability to battle other players in real time crazy card is the best and the only web 3 online multiplayer card game .

 building  crazy card nweb3 nft game application also used technical used 1- react.js application to the blockchain and pair to your wallet you'll also learn about the
2- solidity programming language and used  smart contracts written in solidity work you'll learn how to create smart contracts and decentralized applications on the Avalanche platform 

# Crazy Card Technical Used 
0.`Typescript`
1. `Avalanche` - `web3js`
2. `soldity` - `ethers JS or open Zeppelin`
3. `hardhat`- `Remix `
4. `optmisim`
5.`core whalet`
6. `metamask wallet`
7.`javascript`
8.`react.js`
9-`Avalanche` is an open, programmable smart contracts platform for decentralized applications. It allows you to build fast, low-cost, Solidity-compatible dApps, and launch customized blockchain networks via Subnets. Create without limits - Build anything you want, any way you want
Avalanche is an open, programmable smart contracts platform for decentralized applications. It allows you to build fast, low-cost, Solidity-compatible dApps, and launch customized blockchain networks via Subnets.
Avalanche has the tooling and composability you need to speed from concept to launch. Learn more about building on Avalanche with the below developer resources:
With a stunning design, interactive gameplay, smart wallet pairing, live interaction with smart contracts, and, most importantly, the ability to battle other players in real-time

# game rules 
- card with the same defense and attracj point will cancel each other out attack point from the attacking card will deducet the opposing players health point 
- if player1 defense p2s attack is equal to p2s defense 
- if a player2 defense they refill 3 mana 
- if a player attacks they spend 3 hours 

![Gameplay](https://github.com/samar19/pic-/blob/master/Screen%20Shot%202022-12-04%20at%209.42.52%20PM.png)
![Gameplay](https://github.com/samar19/pic-/blob/master/Screen%20Shot%202022-12-04%20at%209.48.03%20PM.png)

## setting up the Web3 part of the project
0. `cd web3`
1. `npx hardhat` typescript 
2. `npm install @openzeppelin/contracts dotenv @nomiclabs/hardhat-ethers` + Hardhat packages `npm install --save-dev "hardhat@^2.12.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"`
3. Install [Core] is smart wallet alternative built for Avalanche dApps or install [metamask] 
4. Fund your wallet from the [Avax Faucet](https://faucet.avax.network/)
5. Create a `.env` file and specify a PRIVATE_KEY variable.
6. To get to the private key, do the following steps:
7. Copy the `hardhat.config.ts` file from the GitHub gist down in the description
8. Copy the `deploy.ts` script from the GitHub gist down in the description
9. Copy the `CrazyCard.sol` smart contract code from the GitHub gist down in the description
10. Compile the contract by running the `npx hardhat compile` command
11. Deploy the smart contract on the Fuji test network by running the `npx hardhat run scripts/deploy.ts --network fuji` command   `Deploying a smart contract...{ CrazyCard: '0xBc139f451465fcF1B55689BfA652D49F05c13018' }`
  Move the `/artifacts/contracts/crazyCard.json` file to the `/contract` folder on the frontend
  Copy the address of the deployed contract from the terminal and paste it into the `/contract/index.js` file of the frontend application
  12.`cd client ` 
  13-`yarn install`
  Local:   http://localhost:5173/
