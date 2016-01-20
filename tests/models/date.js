require('mocha');
var assert = require('assert');

var date = require('../../models/date');

suite('models/Date', function() {

    suiteSetup(function() {
        // Initialization for the whole test suite (optional)
    });

    suiteTeardown(function() {
        // Clean-up for the whole test suite (optional)
    });

    setup(function() {
        // Initilization for each test case (optional)
        // Eg., create mock DB
    });

    teardown(function() {
        // Clean-up for each test case (optional)
        // Eg., delete mock DB
    });

    // Synchronous test case
    test('#getDay', function() {
        var today = new Date();
        var expected = today.getDay() + 1;

	var dateObj = new date.Date(today.getFullYear(), today.getMonth()+1, today.getDate());
	var actual = dateObj.getDay();
	assert.equal(actual, expected);
    });

    // For demo: this test case should fail
    test('#getDayWrong', function() {
        var today = new Date();
        var expected = today.getDay() + 1;

	var dateObj = new date.Date(today.getFullYear(), today.getMonth()+1, today.getDate());
	var actual = dateObj.getDayWrong();
	assert.equal(actual, expected);
    });
});
