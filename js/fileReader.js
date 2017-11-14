var liri = require('./liri-brains.js');

var fileReader = require("fs");

exports.readFile = function(){
	fileReader.readFile("random.txt", "utf8", function(err, data){
		var commands = data.split(",");

		liri.processCommand(commands);
	});
}