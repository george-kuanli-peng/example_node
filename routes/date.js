/**
 * @fileoverview Handles the date requests.
 */

var date = require('../models/date');
var util = require('util');

/**
 * /date GET handler
 * @param {http.Request} req http request
 * @param {http.Response} res http response
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

