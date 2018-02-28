exports.runningExe = function(fileName,file)
{
  var fs = require('fs');
  var path1 = fileName;
  var exec = require('child_process');
  

  //var run = function()
  //{
    //console.log("fun() start");
    exec.execFile(path1,[' < inputs.txt'],function(err,data)
    {
      //main.exe < inputs

      //console.log(err);
      console.log("output to txt file:" + data);
      
      //save to output

      fs.writeFile('output.txt',data,function(err)
      {
        if (err) throw err;
        console.log('run module complete - you did it!');
        

        // cleaning up files
        //fs.unlinkSync('./' + fileName);
        //console.log('Main.exe deleted');


        //TODO: PUT THIS BACK IN WHEN WERE READY TO KILL THE ZIP!
        //fs.unlinkSync('./' + file);
        //console.log('Zip file deleted');
        
        var temp = file;
        temp = temp.substring(0,temp.length - 3);
        fs.unlinkSync('./' + temp + 'obj');
        console.log('object deleted');
      });


    });

};
