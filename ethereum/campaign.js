// this is created after redeploying the contract 
// this is similar to factory.js but just we are tryting to make it automated such that we dont need to capy paste the 
// address to create the contract instance 
// now to interact with the contract we need a contract instance so that we can access its methods
// like in factory when we deployed our contract we deployed the campaign factory which is having a method to create the 
// campaign now we also have the address of the campaign created in the array of campaign factory
// now when used clicks on a campaign to view the details then we have the address of the campaign where it is deployed 
// now to interact with that address we need a instance of that contract i.e the abi and the address
// hence here we are taking address as parameter and exporting the contract instance whose address is passed.
import web3 from "./web3";
import Campaign from './build/Campaign.json'

export default (address) =>{
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    );
}