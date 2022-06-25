import web3 from './web3';
import Cryptolearn from './build/Cryptolearn.json';

const instance = new web3.eth.Contract(
  Cryptolearn.abi,
  '0x50BEDCf940EeA3BE0F9A89C4741e51a10F74Ab29'
);

export default instance;
