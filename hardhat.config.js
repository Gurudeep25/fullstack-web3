require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk]
    // },
     polygon: {
        url: "https://polygon-mainnet.infura.io/v3/d94ead8d02104f0c8d4dae594216234d",
        accounts: [process.env.pk]
      }
   }
};