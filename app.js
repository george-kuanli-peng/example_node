/**
 * @fileoverview The main script of hello_node. It initializes the components of the system.
 */

/*
 * George Peng: Creates original skeleten of the file.
*/

var express = require('express');
app = express();

require('./routes/index.js');

app.listen(1337, function () {
    console.log('reqdy on port 1337');
});
