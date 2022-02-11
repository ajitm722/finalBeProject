// visit next-routes for the code reference
const routes = require('next-routes')();





//this route is used when user clicks on the viewCampaign button then we are passing a url like
//https://crowdcoin/campaigns/0xaldkfjaosdjfoasdjfoiasjdf
//so the address is gonna change for every campaign
//so we need to tell that any thing like /campaign/some wildcard show go to the show.js page

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', 'campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;