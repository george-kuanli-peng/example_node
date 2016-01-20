require('mocha');
var assert = require('assert');

var board = require('../../models/board');

suite('models/Board', function() {

    setup(function() {
    });

    teardown(function() {
    });

    // Asynchronous test case
    test('#getMessage', function(done) {
        var expected = 'Hello!\n';

        var boardObj = new board.Board();
	boardObj.getMessage(function(data) {
	    assert.equal(data, expected);
	    done();
	});
    });

    // For demo: this test case should fail
    test('#getMessage (2)', function(done) {
        var expected = 'Hello!';

        var boardObj = new board.Board();
	boardObj.getMessage(function(data) {
	    assert.equal(data, expected);
	    done();
	});
    });
});

