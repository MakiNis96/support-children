const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '../.env') })

module.exports = {
  mail: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  web3: {
    networkId: process.env.NETWORK_ID,
    websocketProvider: 'wss://rinkeby.infura.io/ws/v3/' + process.env.INFURA_PROJECT_ID
  }
}
