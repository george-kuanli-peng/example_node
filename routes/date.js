/**
 * @fileoverview Handles the date requests.
 */
/* Revision:
 * 2016/1/10 (George Peng)
 *   Initial implementation.
 */

var date = require('../models/date');
var util = require('util');

/**
 * /date GET handler
 * @param {http.ClientRequest} req http request
 * @param {http.ServerResponse} res http response
 */
exports.handleDate = function(req, res) {
    if (req === undefined || res === undefined) {
        throw "Bad parameters";
    }
    try {
        var _year = parseInt(req.query.year);
	var _month = parseInt(req.query.month);
	var _day = parseInt(req.query.day);
    } catch(err) {
        throw "Bad query parameters" + err;
    }

    var dateObj = new date.Date(_year, _month, _day);
    var day = dateObj.getDay();
    res.end(util.format('It is day %d of the week.', day));
}

app.get('/date', exports.handleDate);

