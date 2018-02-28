//Jack Daniel and Eric Misner
// node.js server for collecting source code from students.
//program will take .zip files and create output from source.cpp files.
//will compare against given input in 'input.txt'.  
  
  //npms
  var http = require('http');
  var formidable = require('formidable');
  var fs = require('fs');
  const decompress = require('decompress');
  var exec = require('child_process');
  //modules we've written
  var compile = require('./compile-module');

  //create the server
  http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
     
      form.parse(req, function (err, fields, files){

        //grab the file name of *.zip 
        var zipName = files.filetoupload.name;
         
        //save the temp file into our sourcecode location.
        var oldpath = files.filetoupload.path;
        var newpath = './' + zipName;
        var mainExe = "main.exe";

        //rename
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          console.log('step 1: temp zip File uploaded and moved!');
        });
        
        //decompress
        decompress(zipName, './').then(files => {
              console.log('step 2: unzipping source.cpp files complete!');
        });
        
        //compile
        compile.compileFunction(zipName);
        
        //run
        var path1 = './main.exe';
        exec.execFile(path1,function(err,data)
        {
          fs.writeFile('output.txt',data,function(err)
          {
            if (err) throw err;
            console.log('step 3: run module complete - you did it!');
          });
        });

        //



        return res.end();
      
      });
      
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(80); // '137.150.122.17'    

  //change to listen on (8080) for localhost 