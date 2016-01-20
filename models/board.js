/**
 * @fileoverview Board messages
 */
/* Revision:
 * 2016/1/17 (George)
 *   Initial implementation
 */
var fs = require('fs');

/**
 * Board modeling class.
 * @constructor
 */
exports.Board = function() {

    /**
     * Get messages on board.
     * @param {fn} callback a function that receives the messages.
     *   Its first parameter is a string object for the messages.
     * @exception throws an exception when a reading error occurs.
     */
    this.getMessage = function(callback) {
        fs.readFile('./public/board.txt', 'utf8', function(err, data) {
	    if (err) {
	        throw err;
	    };
	    callback(data);
	});
    };
};
