'use strict';
/**
 * Require our Modules
 */ 
const myApi = require('express').Router();
const logger = require('../utils/logger');
var request = require('request');



// http://localhost:3000/myApi
myApi.get('/', (req, res) => {
    // Return a status 200 and a Timestamp
	res.status(200).json({
		status: 'OK',
		timestamp: new Date().getTime()
	});
});


// this will handle the url of: localhost:3000/myApi/bebe
myApi.get('/myjokes', (req, res) => {
  const numberOfJokes = req.query.count;
  request({
    uri: `http://api.icndb.com/jokes/random/${numberOfJokes}`,
  }).pipe(res);
});


// http://api.icndb.com/jokes/random/10
// https://expressjs.com/en/guide/writing-middleware.html#:~:text=Middleware%20functions%20are%20functions%20that,middleware%20succeeding%20the%20current%20middleware.


myApi.post('/', (req, res) => {
    // Return a status 200 and a Timestamp
	res.status(200).json({
		status: 'OK',
		timestamp: new Date().getTime()
	});
});

// Export the myApi
module.exports = myApi;


// http://api.icndb.com/jokes/random/10




// will handle any request that ends in /events
// depends on where the router is "use()'d"
// router.get('/events', function (req, res, next) {
// })
