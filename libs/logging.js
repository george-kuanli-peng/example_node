/**
 * @fileoverview Provides logging functions.
 */
/* Revision:
 * 2016/1/20 (George peng)
 *   Initial implementation.
 */

var log4js = require('log4js');

log4js.configure({
    appenders: [
        {type: 'console'}
    ]
});

/**
 * Get default logger
 * @returns {log4js.Logger} the default logger that outputs to console
 */
exports.getLogger = function() {
    return log4js.getLogger();
};
