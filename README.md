Example Node
============

This project demonstrates some coding examples according to the TaaS release principles. Please refer to the following items:

* Source comments: models/board.js
* Unit test (synchronous functions): tests/models/date.js
* Unit test (asynchronous functions): tests/models/board.js
* Unit test (mock objects): tests/routes/date.js

Set up
------

This project is tested on Node v4.2.3, in a machine running Ubuntu Linux 14.04 LTS.

To install the dependent Node packages:

    npm install

Unit test
---------

To run unit tests:

    npm test

The test results by [Mocha](https://mochajs.org/) will be shown on the console.
A coverage report by [jscoverage](https://github.com/fishbar/jscoverage) could be found at the covreporter directory.

API documentation
-----------------

To generate API documents:

    npm run-script gendoc

API documents by [JSDoc](https://github.com/jsdoc3/jsdoc) could be found at the doc directory.

