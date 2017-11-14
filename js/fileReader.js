//includes external js files
var liri = require('./liri-brains.js');

//creates object to read a file
var FileReader = require("fs");

exports.readFile = function(file){
	//checks to make sure a file name was passed in
	if(!file)
		console.log("No file name and path was entered.")
	else{
		FileReader.readFile(file, "utf8", function(err, data){
			if(err) throw err;

			//splits the line up into input arguments
			var commands = data.split(",");

			//calls the liri app again with the new commands
			liri.processCommand(commands, true);
		});
	}
}