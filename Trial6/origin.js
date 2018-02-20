//Jack Daniel and Eric Misner
// node.js server for collecting source code from students.
//program will take .zip files and create output from source.cpp files.
//will compare against given input in 'input.txt'.  

  //npms
  var http = require('http');
  var formidable = require('formidable');
  var fs = require('fs');
  const decompress = require('decompress');
  var events = require('events');
  var eventEmitter = new events.EventEmitter();

  //modules we've written
  var compile = require('./compile-module');
  var runFile = require('./run-module');
  var decompressFile = require('./decompress-module');
  var renameFile = require('./rename-module');
  
  //path variable for our executable files
  var fileName = './main.exe';
  var file;

  //create the server
  http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
     
      form.parse(req, function (err, fields, files){
          
         //grab the file name of *.zip 
         file = files.filetoupload.name;
         


         //save the temp file into our sourcecode location.
        var oldpath = files.filetoupload.path;



        var eventhandle = function rename(){
            renameFile.renameFunction(file, oldpath);
            console.log('step 1');
            eventEmitter.emit('step_1');

        };

        var decomevent = function decom(){
            decompressFile.decompressFunction(file);
            console.log('step 2');
            eventEmitter.emit('step_2');
        };

        var compEvent = function compile(){
            compile.compileFunction(fileName,file);
            console.log('step 3');
            eventEmitter.emit('step_3');
        };  


        var runEvent = function runMain(){
            runFile.runningExe(fileName,file);
            console.log('step 4');
            eventEmitter.emit('step_4');
        };


        eventEmitter.on('even_1',eventhandle);

        //we must extract the zip here
        //TODO:  BROKEN HERE.  PLEASE FIX CALLBACK ON FOLLOWING LINE
        eventEmitter.on('step_1',function(){
            decompressFile.decompressFunction(file);
            console.log('worked');
        });

        eventEmitter.emit('even_1');

        eventEmitter.on('even_2',)        

        eventEmitter.on('step_2',function(){
            compile.compileFunction(fileName,file);
            console.log('worked');
        });

        eventEmitter.on('step_3',function(){
            decompressFile.decompressFunction(file);
            console.log('worked');
        });

        eventEmitter.on('step_4',function(){
            decompressFile.decompressFunction(file);
            console.log('worked');
        });



        eventEmitter.emit('even_1');

	      //calling our compile module here
	      compile.compileFunction(fileName,file);

	      //running the main.exe
	      runFile.runningExe(fileName,file);

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