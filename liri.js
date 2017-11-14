//includes external js files
var liri = require('./js/liri-brains.js');

var arguments = [];
for(var i = 2; i < process.argv.length; i++)
	arguments.push(process.argv[i]);

//executes the main function
liri.processCommand(arguments);