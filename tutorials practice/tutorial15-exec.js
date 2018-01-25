var path = require('path');
var path1 = 'C:/Program Files (x86)/Microsoft Visual Studio/2017/Enterprise/VC/Tools/MSVC/14.12.25827/bin/HostX64/x64/cl.exe';
var exec = require('child_process');
var command = 'dir/w';

	exec.execFile(path1,function(err,data){
		if (err){
			console.log(err);	
		}
		exec.exec(command,function(err,data){
			if (err){
				console.log(err);
			}
			console.log(data);
		});

		console.log(data);
	});


