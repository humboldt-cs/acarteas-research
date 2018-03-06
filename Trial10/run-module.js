exports.runningExe = function(fileName,callback)
{
  var fs = require('fs');
  var path1 = fileName;
  const execFileSync = require('child_process');
  

  //var run = function()
  //{
    //console.log("fun() start");
    //TODO:  IT IS BREAKING HERE ON RIGHT HERE< PLEASE LOOK HERE TODO
    execFileSync.execFile(path1,[''],{},function(err,data)
    {
      //main.exe < inputs

      //console.log(err);
      console.log("output to txt file: " + data);
      
      //save to output

      fs.writeFileSync('output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('step four: run module complete');
        

        
      });

      
    });
    
    callback();

};
