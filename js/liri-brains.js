//includes external js files
var twitter = require('./twitter.js');
var spotify = require('./spotify.js');
var streamFile = require('./fileReader.js');
var omdb = require('./omdb.js');

exports.processCommand = function(command, ranBefore){
	console.log(command[0])
	if(command[0] == null)
		console.log("Nothing was entered");
	else{
		try{
			switch(command[0].toLowerCase()){
				case "my-tweets":
					console.log("Calling twitter function");
					twitter.getTweets();
					break;
				case "spotify-this-song":
					console.log("Calling spotify function");
					spotify.searchSongTitle(command[1]);
					break;
				case "movie-this":
					console.log("Calling omdb api function");
					omdb.getMovieInfo(command[1]);
					break;
				case "do-what-it-says":
					if(ranBefore)
						console.log("Already read in a file. Stopping to prevent a loop.");
					else{
						console.log("do what it says");
						streamFile.readFile(command[1]);
					}
					break;
				default:
					console.log(command+" is not a valid command.");
					break;
			}
		}
		catch (err){
			console.log("There was an error executing command: "+command[0]);
			console.log(err);
		}
	}
}