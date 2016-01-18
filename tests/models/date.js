require('mocha');
var assert = require('assert');

var date = require('../../models/date');

suite('models/Date', function() {

    setup(function() {
    });

    teardown(function() {
    });

    test('getDay', function() {
        var today = new Date();
        var expected = today.getDay() + 1;

	var dateObj = new date.Date(today.getFullYear(), today.getMonth()+1, today.getDate());
	var actual = dateObj.getDay();
	assert.equal(actual, expected);
    });

    test('getDayWrong', function() {
        var today = new Date();
        var expected = today.getDay() + 1;

	var dateObj = new date.Date(today.getFullYear(), today.getMonth()+1, today.getDate());
	var actual = dateObj.getDayWrong();
	assert.equal(actual, expected);
    });
});
