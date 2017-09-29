'use strict';

const EXPRESS = require('express');
const BODYPARSER = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();
const requestProxy = require('express-request-proxy');

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'})
})

APP.post('/projects', BODYPARSER, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

APP.get('/github/*', (request, response) => {
  (requestProxy(
    {
      url: `https://api.github.com/${request.params[0]}`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  ))(request, response)
});

APP.get('*', function(request, response){
  response.sendFile('index.html', {root: './public'})
})

APP.listen(PORT, function() {
  console.log(PORT);
});
