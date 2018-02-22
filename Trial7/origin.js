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
  var mainExe = './main.exe';
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

        
        //make our functions so we can deal with them in a promise
        let firstFunction = function(){
          //calling our rename module
          renameFile.renameFunction(file, oldpath);
          console.log('first');
          
        }; 
        
        let secondFunction = function() {
          //calling our decompress module
          decompressFile.decompressFunction(file);
          console.log("second");
          
        };
        
        let thirdFunction = function() {
          //calling our compile module here
          compile.compileFunction(mainExe,file);
          console.log("third");
          
        };

        let fourthFunction = function() {
          //running the main.exe
          runFile.runningExe(mainExe,file);
          console.log("fourth");
          
        };


        //firstFunction().then(secondFunction()).then(thirdFunction()).then(fourthFunction());

/*
        firstFunction()
          .then(function(){
            return secondFunction();
          })
          .then (function(){
            return thirdFunction();
          })
          .then (function(){
            return fourthFunction();
        });
*/
     
        //calling our rename module, saved in promise.
        let firstPromise = firstFunction();
        console.log('first promise');
        //chaining our second promise - decompression module
        let secondPromise = firstPromise.then(secondFunction());
        console.log("second promise"); 
        //calling our third promise - compile module here
        let thirdPromise = secondPromise.then(thirdFunction());
        console.log("third promise"); 
        //calling our fourth promise - running the main.exe
        let fourthPromise = thirdPromise.then(fourthFunction());
        console.log("fourth promise");


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