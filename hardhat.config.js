require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('hardhat-deploy');

module.exports = {
  solidity: "0.8.10",
  networks: {
    // goerli: {
    //   url: process.env.INFURA_GOERLI_ENDPOINT,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    sepolia: {
      url: process.env.INFURA_SEPOLIA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
