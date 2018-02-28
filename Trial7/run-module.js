exports.runningExe = function(mainExe)
{
  var fs = require('fs');
  //path1 './main.exe'
  var path1 = mainExe;
  var exec = require('child_process');
  //mainExe = './main.exe';
    console.log('step 5' +' '+ mainExe);
      //console.log(file);  
  //var run = function()
  //{
    //console.log("fun() start");
    path1 = ('./' + mainExe);
    exec.execFile(path1,function(err,data)
    {
      //console.log(err);
      console.log("step six: output to txt file: " + data);
      //console.log(file);
      //save to output

      fs.writeFile('output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('step seven: run module complete - you did it!');
        
        
        
      });



    });

    return 0;
};
