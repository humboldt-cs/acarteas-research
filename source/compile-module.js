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
/*
	  process.stdout.on('data', function (data) {
	    console.log("data in compile module -- processing", data.toString('utf-8'));
	  });

	  process.stderr.on('data', function (data) {

	    console.log("error", data.toString('utf-8'));
	  });

*/

	  //process.on('exit')
	    //console.log("step 2: compile-module is finished.");
	    //callback(fileName,file);
	 
	
		
		  
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
	
	
	var exe_name = 'cl.exe';
	 

	//write complie.bat
	var batComm1 = 'call \"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Community\\Common7\\Tools\\VsDevCmd.bat\"\r\n';
	var batComm2 = 'CD \"C:\\Users\\research\\Desktop\\acarteas-research\\'+ trialstupath +'\"\r\n';
	var batComm3 = 'cl.exe ' + '*.cpp' +' /Femain.exe';
	//console.log(sourceCpp);
	console.log('this is batomm1' + batComm1);
	console.log('this is batcomm2'+ batComm2);
	console.log('this is batcomm3'+batComm3);

	//synchonronus writefile of batch
	fs.writeFileSync('compile.bat',batComm1);
	
	fs.appendFileSync('compile.bat',batComm2);
	
	fs.appendFileSync('compile.bat',batComm3);

	console.log(batComm2);

	//var full_command = "compile" + " " + vs_path + " " + local_path + " " + sourceCpp + " " + output_exe;

	rch("./", 'compile.bat');

	console.log('step 3: compile.bat has been made');

	//return output_exe;
	
	callback();
	
};