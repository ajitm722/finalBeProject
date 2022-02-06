"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is created after redeploying the contract 
// this is similar to factory.js but just we are tryting to make it automated such that we dont need to capy paste the 
// address to create the contract instance 
// now to interact with the contract we need a contract instance so that we can access its methods
// like in factory when we deployed our contract we deployed the campaign factory which is having a method to create the 
// campaign now we also have the address of the campaign created in the array of campaign factory
// now when used clicks on a campaign to view the details then we have the address of the campaign where it is deployed 
// now to interact with that address we need a instance of that contract i.e the abi and the address
// hence here we are taking address as parameter and exporting the contract instance whose address is passed.
exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWMsQUFFckI7Ozs7OztBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtrQkFJZSxVQUFBLEFBQUMsU0FBVyxBQUN2QjtXQUFPLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUNoQixLQUFBLEFBQUssTUFBTSxtQkFEUixBQUNILEFBQW9CLFlBRHhCLEFBQU8sQUFFSCxBQUVQO0FBTEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==