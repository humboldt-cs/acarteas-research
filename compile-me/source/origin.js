exports.LaunchNode = function(file,stuname,PAnum,inputs,oldpath)
{

//Jack Daniel and Eric Misner
// node.js server for collecting source code from students.
//program will take .zip files and create output from source.cpp files.
//will compare against given input in 'input.txt'.  

  //sub folder where our current version is.
  var subfolder = 'source';

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
        // passed to our compile module to make a .bat for that student's subfolder
        // trial version plus student name
        var trialstupath = subfolder +'\\' + stuname;
         
        //save the temp file into our sourcecode location: something.zip
        //var oldpath = files.filetoupload.path;
        

        //1. calling rename function to move the .zip file to a local path.
        //2. decompress .zip to .cpp
        //3. complie .cpp to .exe
        //4. run .exe file, capturing output.
        //5. delete unecessary files.      
          renameFile.renameFunction(
          stuname,
          file, 
          oldpath,

          //decompress zip to .cpp
          function(){
            decompressFile.decompressFunction(
           		file,
           		stuname,

              //compile .cpp to .exe
              function(){
                compile.compileFunction(
                    file, 
                    trialstupath,
                    stuname,
                    function(){ 
                      //run the main.exe
                      runFile.runningExe(
                        './'+stuname+'/main.exe',
                        stuname,
                        function(){
                          //delete uneeded files
                          deleteStuff.deleteFunction(
                            file,
                            './main.exe',
                            stuname,
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
   
 };     
      