var assert = require('assert');
var natscode = require('../index.js');
var jsdom = require('jsdom');

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>', {
	url: 'http://www.example.com/?nats=1234'
})).window;

global.document = document;
global.window = document.defaultView;

describe('has_nats_in_querystring_no_cookie', function() {
	it('should return the natscode in querystring', function() {
	 var output = natscode.link({"default_natscode" : "testtest", "linkdomain" : "join.example.com"});
	  assert.equal(output, "http://join.example.com/signup/signup.php?nats=1234");
	});
});
