var util = require('util');
var http = require('http');

var mocha = require('mocha');
var should = require('should');


var webserver = {host: 'localhost', port: settings.SERVER_PORT, path: '/'};

describe('basic server test', function() {
  it('should return http 200 connecting "/"', function(done) {
    http.request(webserver, function(res) {
      res.should.have.status(200);
      done();
    }).end();
  });

  it('should return http 404 connecting to "unknown_path"', function(done) {
    var requestpath = util._extend(webserver, {path: '/unknown_path'});
    http.request(requestpath, function(res) {
      res.should.have.status(404);
      done();
    }).end();
  });
});
