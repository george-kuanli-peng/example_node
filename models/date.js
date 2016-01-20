/**
 * @fileoverview Models dates.
 */
/* Revision:
 * 2016/1/17 (George Peng)
 *   Initial implementation.
 */

/**
 * Models dates.
 * @constructor
 * @param {number} year the year part
 * @param {number} month the month part
 * @param {number} date the date part
 * @return {number} the day of week (from 0 to 6).
 */
exports.Date = function(year, month, day) {

    var _dateObj;

    if (year === undefined || month === undefined || day === undefined) {
        throw "Bad parambers";
    }

    _dateObj = new Date(year, month-1, day);

    /**
     * Gets the day of week.
     * @returns {number} day of week
     */
    this.getDay = function () {
        return _dateObj.getDay() + 1;
    };

    /**
     * Gets the day of week (buggy version).
     * @returns {number} day of week
     */
    this.getDayWrong = function () {
        return _dateObj.getDay();
    };
};
