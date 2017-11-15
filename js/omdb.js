//gets keys to use for the API
var keys = require("./keys.js");

//imports the modules for use
var Request = require('request');
var Winston = require('winston');
var qs = require('query-string');

//function to pulls the info
exports.getMovieInfo = function(search, logger){
	//checks if a movie title was passed in, if none, default to Mr. Nobody
	if(!search){
		search = "Mr. Nobody";
		logger.info("No movie title was inputted. Defaulting to \"Mr. Nobody\".");
	}
	//url
	var url = 'http://www.omdbapi.com/?';

	//url parameters
	var parameters = keys.omdbKeys;
	parameters.s = search;

	logger.info("Searching for: "+search);

	//executes the api request to search
	Request(url+qs.stringify(parameters), function(err, response, body){
		//throws the error
		if(err) throw err;

		var results = JSON.parse(body);

		if(results.Search.length == 0){
			console.log("No movie was found with the title of "+search+".");
			logger.warn("No movie was found with the title of "+search+".");
		}
		else{
			//uses the first search result to pull movie info
			parameters = keys.omdbKeys;
			parameters.i = results.Search[0].imdbID;
			delete parameters["s"]; //removes the search parameter

			Request(url+qs.stringify(parameters), function(err, response, body){
				//throws the error
				if(err) throw err;

				results = JSON.parse(body);

				console.log("Title: "+results.Title);
				console.log("Year: "+results.Year);
				console.log("IMDB Raiting: "+results.Ratings[0].Value);
				console.log("Rotten Tomatoes Raiting: "+results.Ratings[1].Value);
				console.log("Country: "+results.Country);
				console.log("Language: "+results.Language);
				console.log("Plot: "+results.Plot);
				console.log("Actors: "+results.Actors);

				logger.info("Title: "+results.Title);
				logger.info("Year: "+results.Year);
				logger.info("IMDB Raiting: "+results.Ratings[0].Value);
				logger.info("Rotten Tomatoes Raiting: "+results.Ratings[1].Value);
				logger.info("Country: "+results.Country);
				logger.info("Language: "+results.Language);
				logger.info("Plot: "+results.Plot);
				logger.info("Actors: "+results.Actors);
			});
		}
	});
}