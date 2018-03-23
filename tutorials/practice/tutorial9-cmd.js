var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
//required for node-command-line
var cmd = require('node-cmd');

cmd.get(
	'dir/w',
	function(err, data, stderr){
		console.log('this: ', data)
	}
);