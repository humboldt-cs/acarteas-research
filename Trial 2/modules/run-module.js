exports.runningExe = function(path)
{
  var fs = require('fs');
  var path1 = path;
  var exec = require('child_process');
  

  //var run = function()
  //{
    //console.log("fun() start");
    exec.execFile(path1,function(err,data)
    {
      //console.log(err);
      //console.log(data);
      
      //save to output

      fs.writeFile('output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('you did it');
      });

    });  
};
