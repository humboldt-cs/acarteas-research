
  var http = require('http');
  var formidable = require('formidable');
  var fs = require('fs');
  var compile = require('./modules/compile-module');
  var runFile = require('./modules/run-module');

  //path variable for our executable files
  var path = './main.exe';
  //.cpp file folder location
  var sourcefile = 'helloworld.cpp';

  //create the server
  http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;

        //choose the path for the files on the server here
        var newpath = './' + files.filetoupload.name;

        //rename and move the file
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');


  		//compiling
          var sourceCode;
          var readThis = './' + files.filetoupload.name;
      	//read the file        
          fs.readFile( readThis , function(err, contents) {
          console.log(contents);
          sourceCode = contents;
          //calling our compile module here
          compile.compileFunction(sourcefile);
          //calling our run module here
          runFile.runningExe(path);
      });

        });
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