const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');//used to get address of file system module

//delete entire build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read Campaign.col from the contract folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

//create build folder
fs.ensureDirSync(buildPath); //create build folder

// console.log(output);
for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':', '') + ".json"),
        output[contract]
    );
}
