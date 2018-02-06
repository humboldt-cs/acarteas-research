exports.runningExe = function(fileName)
{
  var fs = require('fs');
  var path1 = fileName;
  var exec = require('child_process');
  

  //var run = function()
  //{
    //console.log("fun() start");
    exec.execFile(path1,function(err,data)
    {
      //console.log(err);
      console.log("output to txt file:" + data);
      
      //save to output

      fs.writeFile('output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('run module complete - you did it!');
      });

    });  
};
