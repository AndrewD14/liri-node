//gets keys to use for the API
var keys = require("./keys.js");

//imports the module for Request npm package for use
var Request = require('request');

//imports the module for query-string npm package for use
var qs = require('query-string');

//function to pulls the info
exports.getMovieInfo = function(search){
	//url
	var url = 'http://www.omdbapi.com/?';

	//url parameters
	var parameters = keys.omdbKeys;
	parameters.s = search;

	//executes the api request
	Request(url+qs.stringify(parameters), function(err, response, body){
		//throws the error
		if(err) throw err;

		console.log(JSON.stringify(response));
	});
}