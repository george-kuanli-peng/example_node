/**
 * @fileoverview The main script of hello_node. It initializes the components of the system.
 */

/* Revision:
 * 2016/1/20 (Jacky Chang)
 *   Add application-wide logging.
 * 2015/12/24 (George Peng)
 *   Creates original skeleten of the file.
 */

var express = require('express');
var log4js = require('log4js');
var logger = require('./libs/logging').getLogger();

app = express();
app.use(log4js.connectLogger(logger, {level:'auto'}));

require('./routes/index.js');

app.listen(1337, function () {
    logger.info('ready on port 1337');
});
