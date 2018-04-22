var qsf = require('query-string');
var utils = require('./utils');
var getnatscode = require('./getnatscode');

function getparams(options){

	var raw_params = qsf.parse(window.location.search);
	var params = {};
	var natscode_value = getnatscode(options);

	if(natscode_value != null){
		raw_params.nats = natscode_value;
	}

	// if there is no querystring, no cookie value or no default natscode
	// return empty string
	if(utils.isEmpty(raw_params) && natscode_value == null)
		return '';

	// if there is no querystring, but there is either cookie or defaults natscode set
	// return the querystring but with natscode on it
	if(!utils.isEmpty(raw_params) || natscode_value != null)	
		return "?" + utils.toQueryString(params);

	return '';

}

module.exports = getparams;