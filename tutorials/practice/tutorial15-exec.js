var path = require('path');
//var path1 = 'C:/Program Files (x86)/Microsoft Visual Studio/2017/Enterprise/VC/Tools/MSVC/14.12.25827/bin/HostX64/x64/cl.exe';
var exec = require('child_process');
var command2 = '&&';
var command = 'helloworld.cpp';
var path2 ='C:/Users/Eric/Desktop/acarteas-research/bat_file'
	exec.execFile(path2,function(err,data){
		if (err){
			console.log(err);	
		}
		command;
		console.log(data);
	});


