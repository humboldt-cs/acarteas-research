var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
//required for node-command-line
var cmd = require('node-cmd');

var vsPath = 'cd ProgramData/Microsoft/Windows/Start Menu/Programs/Visual Studio 2017/Visual Studio Tools';



cmd.get(
	'cd/ && cd ProgramData/Microsoft/Windows/Start Menu/Programs/Visual Studio 2017/Visual Studio Tools && Developer Command Prompt for VS 2017 && cd/ && cd Users/Jack/Google Drive/school docs/Grant 2018/acarteas-research/tutorials practice && cl helloworld.cpp',
	function(err, data, stderr){
		console.log('this: ', data)
	}
);



