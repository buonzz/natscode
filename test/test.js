var assert = require('assert');
var natscode = require('../index.js');
var jsdom = require('jsdom');

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

describe('natscode', function() {
  describe('no_querystring_no_cookie', function() {
    it('should return the default natscode', function() {
     var output = natscode.link({"default_natscode" : "testtest", "linkdomain" : "join.example.com"});
      assert.equal(output, "//join.example.com/signup/signup.php?nats=testtest");
    });
  });
});
