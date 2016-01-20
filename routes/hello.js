/**
 * @fileoverview Handles user hello requests.
 */
/* Revision:
 * 2015/12/24 (George Peng)
 *   Initial implementation.
 */

/**
 * /hello GET handler
 * @param {http.ClientRequest} req http request
 * @param {http.ClientResponse} res http response
 */
function hello(req, res) {
    if (req === undefined || res === undefined) {
        throw "Bad parameters";
    }
    else {
        res.end('<html><head><title>process get</title></head><body><p>First name: ' + req.query.first_name + '</p><p>Last name: ' + req.query.last_name + '</p></body></html>');
    }
}

app.get('/hello', hello);

