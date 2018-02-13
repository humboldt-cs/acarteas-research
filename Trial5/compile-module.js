exports.compileFunction = function(sourceCpp, fileName, callback )
{
	//dependencies
	var fs = require('fs');
	var spawn = require('child_process').spawn;

	//code: compile sourcecode, spawn and run batch file.
	function spawnProcess(dir, cmd) {
	  return (process.platform.toLowerCase().indexOf("win") >= 0) 
	    ? spawnWindowsProcess(dir, cmd)
	    : spawnLinuxProcess(dir, cmd);
	}

	function spawnWindowsProcess(dir, cmd) {
	  return spawn("cmd.exe", ["/c", cmd], {cwd: dir});
	}

	function spawnLinuxProcess(dir, cmd) {
	  var cmdParts = cmd.split(/\s+/);

	  return spawn(cmdParts[0], cmdParts.slice(1), { cwd: dir});
	}

	function runCmdHandler(dir, cmd) {
	  var process = null;

	  try {
	    process = spawnProcess(dir, cmd);
	  } catch (e) {
	    console.error("Error trying to execute command '" + cmd + "' in directory '" + dir + "'");
	    console.error(e);
	    console.log("error", e.message);
	    //console.log("executing CMD commands");
	    return;
	  }

	  process.stdout.on('data', function (data) {
	    console.log("progress", data.toString('utf-8'));
	  });

	  process.stderr.on('data', function (data) {
	    console.log("error", data.toString('utf-8'));
	  });

	  process.on('exit', function (code) {
	    console.log("compile-module is finished.");
	    callback(fileName);
		console.log('file ran successfully.');

		//synchoronous delete of batch
		fs.unlinkSync('./' + 'compile.bat');
		console.log('bat deleted');
	  });
	}

	/*
	 * Example commands.
	 */
	//runCmdHandler(".", "find . -name '*.js'");
	//runCmdHandler(".", "uname -a");
	//runCmdHandler(".", "ls -lh .");
	//runCmdHandler("/home/anton/src/github/grunt-prepr", "grunt");
	//var vs_path = "/C:/Program Files (x86)/Microsoft Visual Studio/2017/Community/Common7/Tools/VsDevCmd.bat\"";
	//var local_path = "/C:/Users/research/Desktop/acarteas-research/Trial5\""; //here we took a / off the end here!
	
	var output_exe = "main.exe"
	var exe_name = 'cl.exe';
	

	//write complie.bat
	var batComm1 = 'call \"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\Common7\\Tools\\VsDevCmd.bat\"\r\n';
	var batComm2 = 'CD \"C:\\Users\\research\\Desktop\\acarteas-research\\Trial5\"\r\n';
	var batComm3 = 'cl.exe helloworld.cpp /Femain.exe';

	//synchonronus writefile of batch
	fs.writeFileSync('compile.bat',batComm1);
	
	fs.appendFileSync('compile.bat',batComm2);
	
	fs.appendFileSync('compile.bat',batComm3);

	console.log('bat made');
	//

	//var full_command = "compile" + " " + vs_path + " " + local_path + " " + sourceCpp + " " + output_exe;

	runCmdHandler("./", 'compile.bat');
	console.log('executed correctly.');


	
};