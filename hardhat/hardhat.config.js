require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    devnet: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
      gas: 8000000,
      loggingEnabled: true // Enable logging for debugging
    }
  },
  mocha: {
    timeout: 200000 // Increase timeout for network interactions
  }
};

