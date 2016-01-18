require('mocha');
var assert = require('assert');
var httpMocks = require('node-mocks-http');

var date = require('../../routes/date');

suite('routes/date', function() {

    setup(function() {
    });

    teardown(function() {
    });

    test('date (valid parms)', function() {
        var request = httpMocks.createRequest({
	    method: 'GET',
	    url: '/date',
	    params: {
	        year: '2016',
		month: '1',
		day: '18'
	    },
	    query: {
	        year: '2016',
		month: '1',
		day: '18'
	    }
	});

	var response = httpMocks.createResponse();
	date.handleDate(request, response);

	assert.equal(200, response.statusCode);
	assert.ok(response._getData().indexOf('day 2') >= 0);
    });
});

