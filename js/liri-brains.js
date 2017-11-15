//includes external js files
var twitter = require('./twitter.js');
var spotify = require('./spotify.js');
var streamFile = require('./fileReader.js');
var omdb = require('./omdb.js');

//includes the require objects
var Winston = require('winston');

exports.processCommand = function(command, ranBefore, logger){
	if(command[0] == null)
		logger.error("Nothing was entered");
	else{
		try{
			switch(command[0].toLowerCase()){
				case "my-tweets":
					logger.info("Calling twitter function");
					twitter.getTweets();
					break;
				case "spotify-this-song":
					logger.info("Calling spotify function");
					spotify.searchSongTitle(command[1], logger);
					break;
				case "movie-this":
					logger.info("Calling omdb api function");
					omdb.getMovieInfo(command[1], logger);
					break;
				case "do-what-it-says":
					if(ranBefore)
						logger.info("Already read in a file. Stopping to prevent a loop.");
					else{
						logger.info("do what it says");
						streamFile.readFile(command[1], logger);
					}
					break;
				default:
					console.log(command+" is not a valid command.");
					logger.error(command+" is not a valid command.");
					break;
			}
		}
		catch (err){
			logger.error("There was an error executing command: "+command[0]);
			logger.error(err);
		}
	}
}