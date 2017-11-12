var qsf = require('query-string');

function natscode(options){

	var raw_params = qsf.parse(window.location.search);
	var output = "";
	var params = {};

	if(raw_params == undefined)
		params = { "nats" :  options.default_natscode};

	else
		params = raw_params;


	var nats_cookie = getCookie('nats');

	if(nats_cookie !== undefined)
	{
		var params_copy = params;
		if(params_copy.nats !== undefined)
		{
			delete params_copy.nats;
		}

		var encoded_qsv = [];
		for(k in params_copy){
			encoded_qsv[encodeURIComponent(k)] = encodeURIComponent(params[k]);
		}

		var query1 = encoded_qsv.join("&");

		output = "//" + options.linkdomain + "/signup/signup.php?nats=" + nats_cookie +  '&' + query1;
		return output;
	}

	if(params.nats !== undefined)
	{

		var encoded_qsv = [];
		for(k in params){
			encoded_qsv[encodeURIComponent(k)] = encodeURIComponent(params[k]);
		}

		var query2 = encoded_qsv.join("&");

		output = "//" + options.linkdomain + "/signup/signup.php?" + query2;
		return output;
	}

	output = "//" + options.linkdomain + "/signup/signup.php";
	return output;
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  else
  	return undefined;
}



module.exports = natscode;
