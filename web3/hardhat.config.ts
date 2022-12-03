import dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';

dotenv.config();


export default {
  solidity: {
    defaultNetwork: "mumbai",
    version: '0.8.16',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [
        '57ee5f9240f8056be866e500706bf284b8bad59bb85beeda15364b920eec5ef1',
      ],
    },
    optimistic: {
      url:
        'https://opt-kovan.g.alchemy.com/v2/cfv68qUqLuZipE8sXJYuG-KQ1eKiuPsl',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
    // subnet: {
    //   url: process.env.NODE_URL,
    //   chainId: Number(process.env.CHAIN_ID),
    //   gasPrice: 'auto',
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
}