exports.runningExe = function(mainExe,file)
{
  var fs = require('fs');
  var path1 = mainExe;
  var exec = require('child_process');
        console.log(mainExe);
      console.log(file);  

  //var run = function()
  //{
    //console.log("fun() start");
    exec.execFile(path1,function(err,data)
    {
      //console.log(err);
      console.log("step six: output to txt file: " + data);
      console.log(mainExe);
      console.log(file);
      //save to output

      fs.writeFile('output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('step seven: run module complete - you did it!');
        

        // cleaning up files
        //fs.unlinkSync('./' + mainExe);
        console.log('step eight: Main.exe deleted');


        //TODO: PUT THIS BACK IN WHEN WERE READY TO KILL THE ZIP!
        //fs.unlinkSync('./' + file);
        console.log('step nine: Zip file deleted');
        
        var temp = file;
        temp = temp.substring(0,temp.length - 3);
        //fs.unlinkSync('./' + temp + 'obj');
        console.log('step ten: object deleted');
      });



    });

    return 0;
};
