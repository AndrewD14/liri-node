//includes external js files
var liri = require('./liri-brains.js');

//imports the modules for use
var FileReader = require("fs");
var Winston = require('winston');

exports.readFile = function(file, logger){
	//checks to make sure a file name was passed in
	if(!file){
		console.log("No file name and path was entered.");
		logger.error("No file name and path was entered.");
	}
	else{
		logger.info("Reading in file: "+file);
		FileReader.readFile(file, "utf8", function(err, data){
			if(err){
				if(err.code === 'ENOENT'){
					console.log(file+" was not found.")
					logger.error(file+" was not found.\n"+err);
				}
				else
					throw err;
			}
			else{
				//splits the line up into input arguments
				var commands = data.split(",");

				//logs the values
				logger.info("Commands pulled from the file: "+commands);

				//calls the liri app again with the new commands
				liri.processCommand(commands, true, logger);
			}
		});
	}
}