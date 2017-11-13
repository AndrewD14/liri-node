//includes external js files
var twitter = require('./js/twitter.js');

//executes the main function
processCommand();

function processCommand(){
	var command = process.argv[2];

	console.log(command)
	switch(command.toLowerCase()){
		case "my-tweets":
			console.log("Calling twitter function");
			twitter.getTweets();
			break;
		default:
			console.log(command+" is not a valid command.");
	}
}