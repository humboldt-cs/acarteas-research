//Jack Daniel and Eric Misner
// node.js server for collecting source code from students.
//program will take .zip files and create output from source.cpp files.
//will compare against given input in 'input.txt'.  

  //sub folder where our current version is.
  var subfolder = 'Trial8';

  //npms
  var http = require('http');
  var formidable = require('formidable');
  var fs = require('fs');
  const decompress = require('decompress');

  //modules we've written
  var compile = require('./compile-module');
  var runFile = require('./run-module');
  var decompressFile = require('./decompress-module');
  var renameFile = require('./rename-module');
  var deleteStuff = require('./delete-module');

  //spin locks
  var lock2 = false;
  var lock3 = false;
  var lock4 = false;
  var lock5 = false;

  //TODO: add path variable for our executable files

  //create the server
  http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
     
      form.parse(req, function (err, fields, files){

        //grab the file name of *.zip 
        var file = files.filetoupload.name;
         
        //save the temp file into our sourcecode location.
        var oldpath = files.filetoupload.path;
        
        //list of return variables
        var returnFirstFunction; //f1
        var returnSecondFunction;
        var returnThirdFunction;
        var returnFourthFunction;
        var returnfifthFunction;

        //BIG COMMENT that explains the overall process of what's happening (e.g. create batch, unzip...)
        returnSecondFunction = renameFile.renameFunction(
          file, 
          oldpath,

          //this is what call the decompress
          function(){
            decompressFile.decompressFunction(
              returnSecondFunction,

              //after decompression, attempt to compile
              function(){
                compile.compileFunction(
                    file, 
                    subfolder,
                    function(){ 
                      runFile.runningExe(
                        './main.exe',
                        function(){
                          deleteStuff.deleteFunction(
                            file,
                            './main.exe',
                            function(){
                              //everything is done, call function that sends this info to the user
                            }
                          );
                        }
                    );
                    }
                );
              }
            );
          }
        );


        /* this is for moving the file, which we are not doinng.
        //rename and move the file
          fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
		    */ //for moving the file
      
        return res.end();
      //});  for moving the file
   });
      //note: if there is an error in this section of code, it'll break the path on line 11.
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(80); //, '137.150.122.17'    

  //change to listen on (8080) for localhost
  //change to listen on (80) at 'www.lumberhacks.org:80'