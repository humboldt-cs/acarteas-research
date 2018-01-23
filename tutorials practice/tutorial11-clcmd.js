var path = require('path');
var cmd = require('node-cmd');
var path1 = 'C:/Program Files (x86)/Microsoft Visual Studio/2017/Enterprise/VC/Tools/MSVC/14.12.25827/bin/Hostx64/x64/cl helloworld.cpp';

cmd.get(
	path1,
	function(err,data,stderr){
		console.log('this: ',data)
	}

	);

