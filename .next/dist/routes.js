'use strict';

// visit next-routes for the code reference
var routes = require('next-routes')();

//this route is used when user clicks on the viewCampaign button then we are passing a url like
//https://crowdcoin/campaigns/0xaldkfjaosdjfoasdjfoiasjdf
//so the address is gonna change for every campaign
//so we need to tell that any thing like /campaign/some wildcard show go to the show.js page

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzJCLEFBRDNCLGtCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQyxtQkFHSyxBQUhMLElBR1MsQUFIVCxnQ0FHeUMsQUFIekMsNEJBSUssQUFKTCxJQUlTLEFBSlQsb0NBSTZDLEFBSjdDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi9iZXByb2oifQ==