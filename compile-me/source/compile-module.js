//this module is used to compile .cpp code and change it into an executable.
exports.compileFunction = function(file,trialstupath,stuname,callback)
{

	//dependencies
	var fs = require('fs');
	var spawn = require('child_process').spawnSync;
	var output_exe = "main.exe";
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

	let rch = function runCmdHandler(dir, cmd) {
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
		  
	}

	var exe_name = 'cl.exe';
	 
	//write complie.bat
	var batComm1 = 'call \"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\Common7\\Tools\\VsDevCmd.bat\"\r\n';
	var batComm2 = 'CD \"C:\\Users\\research\\Desktop\\Working-Code\\acarteas-research\\'+ trialstupath +'\"\r\n';
	var batComm3 = 'cl.exe ' + '*.cpp' +' /Femain.exe';

	//synchonronus writefile of batch
	fs.writeFileSync('compile.bat',batComm1);
	
	fs.appendFileSync('compile.bat',batComm2);
	
	fs.appendFileSync('compile.bat',batComm3);

	//var full_command = "compile" + " " + vs_path + " " + local_path + " " + sourceCpp + " " + output_exe;

	rch("./", 'compile.bat');

	console.log('step 3: compile.bat has been made');

	callback();
	
};