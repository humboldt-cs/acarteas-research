//read a file, when a file is read, trigger a message log, check for errors if it can't open.

'use strict';
var http = require('http');
var url = require('url');
var file_server = require('fs');
var port = 1337;
var path = require('path');

//node logs when the client has accessed the practice.html webpage
// only works when files are in the same directory
// requires Practice.html
http.createServer(function (req, res) {    
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname; 
    file_server.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
//this function logs when the bage has been accessesed
        var rs = file_server.createReadStream('./Practice.html');

        rs.on('open', function () {
            console.log('HTML file is open');
        });
        return res.end();
    });
}).listen(port);
