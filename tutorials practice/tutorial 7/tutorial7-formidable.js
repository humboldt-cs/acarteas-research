//produces an HTML form in response to a request on port 8080. 
//a filename.txt is chosen, and uploaded as a submitted form
//file is saved in the server in temp, then moved into a permanent folder
//page is returned to client saying file has been moved successfully


var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

//create the server
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;

      //choose the path for the files on the server here:
      var newpath = 'C:/Users/Jack/Google Drive/school docs/Grant 2018/acarteas-research/tutorials practice/tutorial 7/serverFileTest/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
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
}).listen(8080);