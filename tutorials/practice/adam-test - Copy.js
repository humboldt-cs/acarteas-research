var spawn = require('child_process').spawn;

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
    console.log("finished");
    return;
  }

  process.stdout.on('data', function (data) {
    console.log("progress", data.toString('utf-8'));
  });

  process.stderr.on('data', function (data) {
    console.log("error", data.toString('utf-8'));
  });

  process.on('exit', function (code) {
    console.log("finished");
  });
}

/*
 * Example commands.
 */
//runCmdHandler(".", "find . -name '*.js'");
//runCmdHandler(".", "uname -a");
//runCmdHandler(".", "ls -lh .");
//runCmdHandler("/home/anton/src/github/grunt-prepr", "grunt");
var vs_path = "\C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Enterprise\\Common7\\Tools\\VsDevCmd.bat\"";
var local_path = "/C:/code/acarteas-research/tutorials practice\"";
var cpp_files = "helloworld.cpp";
var output_exe = "main.exe"
var exe_name = 'cl.exe';
var cpp = 'helloworld.cpp';
var full_command = "compile-e" + " " + vs_path + " " + local_path + " " + cpp_files + " " + output_exe;
console.log(full_command);
runCmdHandler('./',full_command);