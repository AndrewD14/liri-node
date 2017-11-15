//gets keys to use for the API
var keys = require("./keys.js");

//includes the require objects
var Spotify = require('node-spotify-api');
var Winston = require('winston');

//creates an object to execute the request to spotify
var spotify = new Spotify(keys.spotifyKeys);

//searchs for a track using the provide song title
exports.searchSongTitle = function(title, logger){
	var parameters = {};
	parameters.type = 'track';

	//checks if no song title was inputted, if nothing, defaults to "The Sign" by Ace of Base
	if(!title){
		parameters.query = 'The Sign';
		logger.info("No track title was inputted. Defaulting to \"The Sign\" by Ace of Base.");
	}
	else
		parameters.query = title;

	spotify.search(parameters, function(err, data) {
		if (err) throw err;

		var index = 0; //defaults to the first song pulled from spotify

		//loops through to find the artist for the default test case
		if(!title){
			var found = false;
			do{
				for(i in data.tracks.items[index].artists){
					if(data.tracks.items[index].artists[i].name.toLowerCase() == "ace of base")
						found = true;
				}
				if(!found)
					index++;
			}while(!found && index < data.tracks.items.length);
		}

		console.log("Song: "+data.tracks.items[index].name);
		logger.info("Song: "+data.tracks.items[index].name);

		console.log("Album: "+data.tracks.items[index].album.name);
		logger.info("Album: "+data.tracks.items[index].album.name);
		
		//grabs all artists and builds a string of their names together
		var artists = "";
		for(i in data.tracks.items[index].artists){
			artists += data.tracks.items[index].artists[i].name;

			if(i < data.tracks.items[index].artists.length-1)
				artists += ", ";
		}
		console.log("Artists: "+artists);
		logger.info("Artists: "+artists);

		if(data.tracks.items[index].preview_url){
			console.log("Preview link: "+data.tracks.items[index].preview_url);
			logger.info("Preview link: "+data.tracks.items[index].preview_url);
		}
		else{
			console.log("Preview link: Not available");
			logger.info("Preview link: Not available");
		}
	})
}