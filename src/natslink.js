var qsf = require('query-string');
var utils = require('./utils');
var getnatscode = require('./getnatscode');


function natslink(options){

	var raw_params = qsf.parse(window.location.search);
	var output = "";
	var params = {};
	var natscode_value = getnatscode({'default_natscode': options.default_natscode});

	if(raw_params == undefined)
		params = { "nats" :  natscode_value};

	else
		params = raw_params;


	if(natscode_value != undefined)
	{
		var params_copy = params;
		if(params_copy.nats !== undefined)
		{
			delete params_copy.nats;
		}

		var query1 = utils.toQueryString(params);

		output = "//" + options.linkdomain + "/signup/signup.php?nats=" + nats_cookie +  '&' + query1;
		return output;
	}

	if(params.nats != undefined)
	{

		var query2 = utils.toQueryString(params);

		output = "//" + options.linkdomain + "/signup/signup.php?" + query2;
		return output;
	}


	if(!isEmpty(params))
	{

		var query3 = utils.toQueryString(params);

		output = "//" + options.linkdomain + "/signup/signup.php?" + query3;
		return output;		
	}

	output = "//" + options.linkdomain + "/signup/signup.php";
	return output;
}

module.exports = natslink;