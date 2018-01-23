	
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
//required for node-command-line
var cmd = require('node-command-line'), Promise = require('bluebird');

//create the server
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;

      //choose the path for the files on the server here:
      //relative paths
      	
      var newpath = './somefilefolder/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        
        function runSingleCommandWithoutwait() {
        	cmd.run('time');
        	console.log('time has been shown.');
        }

        res.end();
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