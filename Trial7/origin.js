//Jack Daniel and Eric Misner
// node.js server for collecting source code from students.
//program will take .zip files and create output from source.cpp files.
//will compare against given input in 'input.txt'.  

  //npms
  var http = require('http');
  var formidable = require('formidable');
  var fs = require('fs');
  const decompress = require('decompress');
  //var events = require('events');
  //var eventEmitter = new events.EventEmitter();

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

        //make our functions so we can deal with them in a promise
        let firstFunction = function(){
          //calling our rename
          return new Promise(function(resolve,reject){
              returnFirstFunction = compile.compileFunction(file);
              
              resolve('firstPromise');   
          });
        };
       
        let secondFunction = function() {
          //calling our decompress
          return new Promise(function(resolve,reject){
            returnSecondFunction = renameFile.renameFunction(file, oldpath);
            
            resolve('secondPromise');  
          });        
        };
        
        let thirdFunction = function() {
          //calling our compile
          return new Promise(function(resolve,reject){
            returnThirdFunction = decompressFile.decompressFunction(returnSecondFunction);
            resolve('thirdPromise');
          });          
        };

        let fourthFunction = function() {
          //running the main.exe 
          return new Promise(function(resolve,reject){
            returnFourthFunction = runFile.runningExe(returnThirdFunction);
            resolve('fourthPromise');  
          });         
        };

        let fifthFunction = function() {
          //deleting stuf
          return new Promise(function(resolve,reject){
            //var mainExe = './main.exe';
            returnfifthFunction = deleteStuff.deleteFunction(file,mainExe);
            resolve('fifthPromise');  
          });          
        };

        //event emmiters to make sure we trigger everything in approp. order



        //our promise chain, ensuring things finish in order.
        firstFunction().then(function(){
          return secondFunction();
        }).then(function(){
          return thirdFunction();
        }).then(function(){
          return fourthFunction();
        })/*.then(function(){
          return fifthFunction();
        })*/.catch(function(){
          console.log('broke af');
        });


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

  //change to listen on (8080) for now 