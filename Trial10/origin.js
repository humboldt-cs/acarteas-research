//Jack Daniel and Eric Misner
// node.js server for collecting source code from students.
//program will take .zip files and create output from source.cpp files.
//will compare against given input in 'input.txt'.  

  //sub folder where our current version is.
  var subfolder = 'Trial10';

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


  //TODO: add path variable for our executable files

  //create the server
  http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();

   		files = [],
   		fields = [];

        var uname;
        form.on('field' ,function(field,value){
        	fields.push([field,value])
        	//console.log('this should show our field and vlaue'+field,value);
        });
     	
      form.parse(req, function (err, fields, files){

        //grab the file name of *.zip 
        var file = files.filetoupload.name;

        var stuname = fields['uname'];        



        console.log('dis is r field value hehe XD ' + stuname);
       

         
        //save the temp file into our sourcecode location.
        var oldpath = files.filetoupload.path;
        

        //1. calling rename function to move the .zip file to a local path.
        //2. decompress .zip to .cpp
        //3. complie .cpp to .exe
        //4. run .exe file, capturing output.
        //5. delete unecessary files.      
          var newpath = renameFile.renameFunction(
          file, 
          oldpath,

          //decompress zip to .cpp
          function(){
            decompressFile.decompressFunction(
           		file,

              //compile .cpp to .exe
              function(){
                compile.compileFunction(
                    file, 
                    subfolder,
                    function(){ 
                      //run the main.exe
                      runFile.runningExe(
                        './main.exe',
                        function(){
                          //delete uneeded files
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
      res.write('<input type="text" name="uname"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(80); //, '137.150.122.17'    

  //change to listen on (8080) for localhost
  //change to listen on (80) at 'www.lumberhacks.org:80'