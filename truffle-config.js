const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'glue check pupil prefer lounge brother hawk wage plate bomb luxury gas'
const infuraProjectId = '92a23becb91d48d5b7ca23b757cd79a2'
const Web3 = require('web3')

const webSocketProvider = new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/' + infuraProjectId)

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: "0.8.6",
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
  networks: {
    develop: {
      port: 7545
    },
    rinkeby: {
      host: "localhost",
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infuraProjectId)
      },
      network_id: 4
      , gas: 6700000
      , gasPrice: 10000000000
    },
    rinkebyws: {
      host: "localhost",
      provider: function () {
        return new HDWalletProvider(mnemonic, webSocketProvider)
      },
      network_id: 4
      , gas: 6700000
      , gasPrice: 10000000000
    }
  }
};
