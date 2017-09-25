'use strict';

const EXPRESS = require('express');
// const PG = require('pg');
const BODYPARSER = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'})
})

APP.post('/articles', BODYPARSER, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

APP.listen(PORT, function() {
  console.log(PORT);
});
