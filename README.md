### Configure

Create .env from .env.example and adjust params
```bash
cp .env.example .env
```
Also make sure that you have postgres db server and you created db with `createdb <your_database_name>` 

### Deploy contract
```bash
# Install dependencies
yarn

# on develop network
truffle migrate

# On Rinkeby
truffle migrate --network rinkeby

# On forked mainnet by instruction from https://github.com/invictusappscom/truffle-playground#readme
truffle migrate --network forked
```

### Build
Install dependecies
```bash
yarn deps
```
Build client application
```bash
yarn build
```

### Run
```bash
yarn start
```
Default location of the frontend app http://localhost:3001/

### Dockerized Run
```bash
docker-compose up --build
```
* Note this is still work in progress it is not customized for the latest release where it is also included postgres db.

### Test
Test all .js and .sol files in ./test directory with `truffle test`
```bash
yarn test
```

