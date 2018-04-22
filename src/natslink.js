var qsf = require('query-string');
var utils = require('./utils');
var getnatscode = require('./getnatscode');
var getparams = require('./getparams');


function natslink(options){

	var querystring_params = getparams(options);
	var output = window.location.protocol + "//" + options.linkdomain 
					+ "/signup/signup.php" + querystring_params;
	
	return output;
}

module.exports = natslink;