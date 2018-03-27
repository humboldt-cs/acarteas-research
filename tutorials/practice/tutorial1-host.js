
//working host on port 1337, displays a webpage with hello world visible.

'use strict';
var http = require('http');
var port = 1337;
//var dt = require('./firstModule');


http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('Hello World!');
    res.end();
}).listen(port);

