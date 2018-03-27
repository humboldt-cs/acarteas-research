var path = require('path');
var path1 = 'C:/Program Files (x86)/Microsoft Visual Studio/2017/Enterprise/VC/Tools/MSVC/14.11.25503/bin/HostX64/x64/cl.exe';
var exec = require('child_process').execFile;

var fun = function(){
	console.log("fun() start");
	exec(path1,function(err,data){
		console.log(err);
		console.log(data);
	});
}

fun();
