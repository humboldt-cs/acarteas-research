//hosts locally on port 1337, when anyone goes to this port, 

//display a message, and call a function written in an extended module, display result.

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var dt = require('./tutorial2-module');


http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write(req.url);
	//res.end();
	res.end('Should Export this and show 4 on the next line\n' + dt.addTwo(2) );
}).listen(port);

