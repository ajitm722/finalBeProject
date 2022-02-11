// refer the code from next-routes friday for the code below
// see the server section
// this file is used to tell app routes 

// as now we have a customization on the routes we dont want next to decide the routing
// so in the package.json inside the script dev change next dev to node server.js
// this will now use this file to load the app

const { createServer } = require('http');
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app)


app.prepare().then(() => {
    createServer(handler).listen(3000 , (err)=>{
        if(err) throw err;
        console.log('Ready on localhost:3000')
    });
  });