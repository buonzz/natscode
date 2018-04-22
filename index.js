var getnatscode = require('./src/getnatscode');
var natslink = require('./src/natslink');
var getparams = require('./src/getparams');

module.exports = {
	value: getnatscode,
	link: natslink,
	params:getparams
};
