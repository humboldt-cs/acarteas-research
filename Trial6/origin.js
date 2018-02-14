//TODO:  add the ability to unzip our .cpp files!

//tutorial here:
// 
// https://www.npmjs.com/package/extract-zip


  var http = require('http');
  var formidable = require('formidable');
  var fs = require('fs');
  var compile = require('./compile-module');
  var runFile = require('./run-module');

  //path variable for our executable files
  var fileName = './main.exe';
  //.cpp file folder location
  //var sourcefile = 'helloworld.cpp';

  //create the server
  http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      
      form.parse(req, function (err, fields, files){
          
          //res.write(<javascript> document.getElementById( ) <\/javascript> )
          //document.getElementById("");
          console.log(form.name);  
          console.log(req.name);
          //calling our compile module here
          compile.compileFunction(fileName, runFile.runningExe );

          //*cpp         
          //calling our run module here
          //runFile.runningExe(fileName);

        //var oldpath = files.filetoupload.path;

        //choose the path for the files on the server here
        //var newpath = './' + files.filetoupload.name;

        /* this is for moving the file, which we are not doinng.
        
        //rename and move the file
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
		*/ //for moving the file


  		//compiling
          //var sourceCode;
          //var readThis = './' + files.filetoupload.name;
      	//read the file        
          //fs.readFile( readThis , function(err, contents) {
          //console.log(contents);
          //sourceCode = contents;
          
          
          return res.end();
      //});  for moving the file

        //});
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
  }).listen(8080); //, '137.150.122.17'     