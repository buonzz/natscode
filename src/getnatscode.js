var utils = require('./utils');
var qsf = require('query-string');

/**
*  get the natscode value
*
*  determines the natscode that should be used in a link
*  by checking the value in the cookie called "nats", if there is no 
*  found in the cookie, it will return the value passed in default_natscode instead
* 
* @param Object the only required property of this object is "default_natscode"
*
* @return string the natscode value or null if the default_natscode is set
*/
function getnatscode(options){

	var nats_cookie = utils.getCookie('nats');
	var raw_params = qsf.parse(window.location.search);

	if(nats_cookie != undefined)
		return nats_cookie;

	if(raw_params.nats != undefined){
		return raw_params.nats;
	}

	if(options.default_natscode != undefined)
		return options.default_natscode;

	return null;
}

module.exports = getnatscode;