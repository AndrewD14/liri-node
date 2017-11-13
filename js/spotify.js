//gets keys to use for the API
var keys = require("./keys.js");

//imports the module for spotify npm package for use
var Spotify = require('node-spotify-api');

//creates an object to execute the request to spotify
var spotify = new Spotify(keys.spotifyKeys);

//searchs for a track using the provide song title
exports.searchSongTitle = function(title){
	//cehcks if no song title was inputted
	if(title == "" || title == null)
		title = "The Sign";

	spotify.search({ type: 'track', query: title }, function(err, data) {
		if (err) {
		return console.log('Error occurred: ' + err);
		}
	 
		console.log(JSON.stringify(data)); 
	})
}