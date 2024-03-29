const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const dao = require('../src/eth/build/Cryptolearn.json');

const provider = new HDWalletProvider({
  mnemonic: {
    phrase:
      'giggle fruit trophy hip fee clinic fall horse strong situate next eyebrow',
  },
  providerOrUrl:
    'https://rinkeby.infura.io/v3/9b7f644063e24a29b636700bb9b84f0a',
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(dao.abi)
    .deploy({
      data: dao.evm.bytecode.object,
      arguments: [web3.utils.toWei('0.1')],
    })
    .send({ from: accounts[0], gas: '5000000' });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();

//Deployed Contract Address
// 0x50BEDCf940EeA3BE0F9A89C4741e51a10F74Ab29
