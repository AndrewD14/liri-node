//includes external js files
var twitter = require('./twitter.js');
var spotify = require('./spotify.js');
var streamFile = require('./fileReader.js');
var omdb = require('./omdb.js');

exports.processCommand = function(command){
	console.log(command[0])
	if(command[0] == null)
		console.log("Nothing was entered");
	else{
		switch(command[0].toLowerCase()){
			case "my-tweets":
				console.log("Calling twitter function");
				twitter.getTweets();
				break;
			case "spotify-this-song":
				console.log("Calling spotify function");
				if(command.length >= 2)
					spotify.searchSongTitle(command[1]);
				else
					spotify.searchSongTitle(null);
				break;
			case "movie-this":
				console.log("Calling omdb api function");
				if(command.length >= 2)
					omdb.getMovieInfo(command[1]);
				else
					omdb.getMovieInfo(null);
				break;
				break;
			case "do-what-it-says":
				console.log("do what it says");
				streamFile.readFile();
				break;
			default:
				console.log(command+" is not a valid command.");
				break;
		}
	}
}