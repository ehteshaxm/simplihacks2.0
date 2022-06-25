const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const dirPath = path.join(__dirname, '../src/eth');
const buildPath = path.resolve(dirPath, 'build');
fs.removeSync(buildPath);

const contractPath = path.resolve(__dirname, 'contract', 'Cryptolearn.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {},
  settings: {
    metadata: {
      useLiteralContent: true,
    },
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

input.sources['Cryptolearn.sol'] = {
  content: source,
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contracts = output.contracts['Cryptolearn.sol'];

fs.ensureDirSync(buildPath);

for (let contract in contracts) {
  if (contracts.hasOwnProperty(contract)) {
    fs.outputJsonSync(
      path.resolve(buildPath, `${contract}.json`),
      contracts[contract]
    );
  }
}
