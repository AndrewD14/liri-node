//includes external js files
var liri = require('./js/liri-brains.js');

//grabs the user inputs from the command line
var arguments = [];
for(var i = 2; i < process.argv.length; i++)
	arguments.push(process.argv[i]);

//executes the main function
liri.processCommand(arguments, false);