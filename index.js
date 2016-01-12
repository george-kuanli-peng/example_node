var express = require('express');

var app = express();

// define routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.htm');
});

app.get('/process_get', function(req, res) {
    res.end('<html><head><title>process get</title></head><body><p>First name: ' + req.query.first_name + '</p><p>Last name: ' + req.query.last_name + '</p></body></html>');
});

app.listen(1337, function () {
    console.log('reqdy on port 1337');
});
