//gets keys to use for the API
var keys = require("./keys.js");

//imports the module for twitter npm package for use
var Twitter = require('twitter');

//creates a variable to execute the request to twitter
var client = new Twitter(keys);

//calls the api to get the 20 most recent tweets
exports.getTweets = function(){
	//parameters
	var params = {count: 20};
	client.get("statuses/user_timeline", params, processTwitterRequest);
}

//function for the callback of the client
function processTwitterRequest(err, tweets, response){
	if(err)
		console.log(err);

	console.log(tweets);
}