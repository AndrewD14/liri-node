//gets keys to use for the API
var keys = require("./keys.js");

//imports the module for twitter npm package for use
var Twitter = require('twitter');

//creates an object to execute the request to twitter
var client = new Twitter(keys.twitterKeys);

//calls the api to get the 20 most recent tweets
exports.getTweets = function(){
	//parameters
	var params = {count: 20};
	
	client.get("statuses/user_timeline", params, processTwitterRequest);
}

//function for the callback of the client
function processTwitterRequest(err, tweets, response){
	if(err) throw err;

	//loops through the tweets and outputs them to the console
	for(i in tweets){
		var createTime = new Date(tweets[i].created_at);
		console.log(createTime.toLocaleDateString()+" "+createTime.toLocaleTimeString()+ ": "+tweets[i].text);
	}
}