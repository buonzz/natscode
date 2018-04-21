var qsf = require('query-string');
var utils = require('./utils');
var getnatscode = require('./getnatscode');


function natslink(options){

	var raw_params = qsf.parse(window.location.search);
	var output = "";
	var params = {};
	var natscode_value = getnatscode({'default_natscode': options.default_natscode});

	if(utils.isEmpty(raw_params))
		params = { "nats" :  natscode_value};

	else
		params = raw_params;


	var querystring_params = utils.toQueryString(params);

	if(querystring_params.length > 0)
	{
		output = "//" + options.linkdomain + "/signup/signup.php?" + querystring_params;
		return output;
	}


	if(!utils.isEmpty(params))
	{

		output = "//" + options.linkdomain + "/signup/signup.php?" + querystring_params;
		return output;		
	}

	output = "//" + options.linkdomain + "/signup/signup.php";
	return output;
}

module.exports = natslink;