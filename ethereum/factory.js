import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

//abi is the interface which is used to interact and access the methods of the contract
// we got this abi from the precompiled CampaignFactory.sol file in compile script whose output is stored in
//the build directory in CampaignFactory.json file
const abi = JSON.parse(CampaignFactory.interface);

//this address was saved when we had deployed the contract on rinkeby test network

//const address = "0x5388d2A38557a39b4c51865976dF4B0Ac1D03e80"

// const address = "0xCB265F4D163f8F383AEEB4ad28E6F0D4055Fe2d1"

// const address = "0xb40526E1D899f87fC1e287578b9aeE28a582F667"

const address = "0xA3f36333549356234696d4332BdF27EA07576d75"
const contractInstance = new web3.eth.Contract(abi, address);

export default contractInstance;