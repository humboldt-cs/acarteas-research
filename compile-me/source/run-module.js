//runs our exe file
exports.runningExe = function(fileName,stuname,callback)
{
  var fs = require('fs');
  var path1 = fileName;
  const execFileSync = require('child_process');
  
    execFileSync.execFile(path1,[''],{},function(err,data)
    {
      //TODO: main.exe < inputs
      console.log("final output to txt file: " + data);
      
      //save to output
      fs.writeFileSync('./'+stuname+'/output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('step four: run module complete');
        
      });
   
    });
    
    callback();
};
