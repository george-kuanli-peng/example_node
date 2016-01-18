/**
 * @fileoverview Defines routes.
 */

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.htm');
});

require('./hello');
require('./date');
