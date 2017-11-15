//includes external js files
var liri = require('./js/liri-brains.js');

//includes the require objects
var Winston = require('winston');

//sets up the logger stream
var logger = new (Winston.Logger) ({
    transports: [
      new (Winston.transports.File)({
      	timestamp: function(){
      		//gets current date
			var date = new Date();
			return date.toLocaleDateString()+" "+date.toLocaleTimeString();
      	},
      	json: false,
      	filename: 'liri-log.log' })
    ]
  });

//starts the logging
logger.info("Liri app started");

//grabs the user inputs from the command line
var arguments = [];
for(var i = 2; i < process.argv.length; i++)
	arguments.push(process.argv[i]);

//executes the main function
liri.processCommand(arguments, false, logger);

process.on('exit', (function(){
	//ends the logger
	logger.info("Liri app ended\n******************************************************");
}));