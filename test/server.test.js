var chai = require('chai');
var request = require('request');
var expect = chai.expect;
var server = require('../index');

describe('Server response', function(){
  it('should return 200', function(done){
    request.get('http://localhost:5000', function(err, res, body){
      const status = res.statusCode;
      expect(status).to.equal(200);
      done();
    })
  });
  it('should return 404', function(done){
    request.get('http://localhost:5000/home', function(err, res, body){
      const status = res.statusCode;
      expect(status).to.equal(404);
      done();
    })
  });
});

describe('Server response with a valid object', function(done){
  it('should return a valid object for a valid request', function(done){
    request.get('http://localhost:5000', function(err, res, body){
      const obj = JSON.parse(body);
      expect(obj).to.be.an('object');
      done();
    });
  });
});