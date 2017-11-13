//includes external js files
var twitter = require('./js/twitter.js');
var spotify = require('./js/spotify.js');

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
		case "spotify-this-song":
			console.log("Calling spotify function");
			spotify.searchSongTitle(process.argv[3]);
			break;
		default:
			console.log(command+" is not a valid command.");
			break;
	}
}