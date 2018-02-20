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

        //four events we'd like to run synchronously with eventEmitters
        var eventhandle = function rename(){
            console.log('step A');
            eventEmitter.emit('step_A');
        };

        var decomevent = function decom(){
            console.log('step B');
            eventEmitter.emit('step_B');
        };

        var compEvent = function compile(){
            console.log('step C');
            eventEmitter.emit('step_C');
        };  

        var runEvent = function runMain(){
            console.log('step D');
            eventEmitter.emit('step_D');
        };

        //these are the objects which should be synchonronous within scope
        eventEmitter.on('step_A',function(){
            //calling our rename module
            renameFile.renameFunction(file, oldpath);
            console.log('worked');
        });  

        eventEmitter.on('step_B',function(){
            //calling our decompress module
            decompressFile.decompressFunction(file);
            console.log('worked');
        });

        eventEmitter.on('step_C',function(){
            //calling our compile module here
            compile.compileFunction(fileName,file);
            console.log('worked');
        });

        eventEmitter.on('step_D',function(){
            //running the main.exe
            runFile.runningExe(fileName,file);
            console.log('worked');
        });

        //these events will fire those above
        eventEmitter.on('even_1',eventhandle);
        eventEmitter.on('even_2',decomevent);
        eventEmitter.on('even_3',compEvent);
        eventEmitter.on('even_4',runEvent);
        //fired
        //eventEmitter.emit('even_1');
        //eventEmitter.emit('even_2');  
        //eventEmitter.emit('even_3');  
        //eventEmitter.emit('even_4');   

        let first = function(callback){
          //calling our rename module
          renameFile.renameFunction(file, oldpath);
          console.log('first');
          callback();
        }; 
        
        let second = function(callback) {
          //calling our decompress module
          decompressFile.decompressFunction(file);
          console.log("second");
          callback();
        };
        
        let third = function(callback) {
          //calling our compile module here
          compile.compileFunction(fileName,file);
          console.log("third");
          callback();
        };

        let fourth = function(callback) {
          //running the main.exe
          runFile.runningExe(fileName,file);
          console.log("fourth");
          callback();
        };


        first(second(third(fourth)));


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