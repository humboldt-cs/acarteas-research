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
  var lock2 = false;
  var lock3 = false;
  var lock4 = false;
  var lock5 = false;
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

          //calling our rename
              function go1()
              {
                if (lock1 == true)
                {
                      lock1 = false;
                      //returnFirstFunction = 
                      compile.compileFunction(file);
                      //break;
                      lock2=true;
                }
                else
                {
                  setTimeout(go2,500);
                }
              };

 
          

        console.log('lock2 should be true' + "" + lock2);
      
            function go2()
            	{
            		if (lock2 == true)
            		{
                     	lock2 = false;
                     	returnSecondFunction = renameFile.renameFunction(file, oldpath);
                     	//break;
                     	lock3=true;
            		}
            		else
            		{
            			setTimeout(go2,500);
            		}
            	};

            function go3()
            	{
            		if (lock3 == true)
            		{
                     	lock3 = false;
            			    returnThirdFunction = decompressFile.decompressFunction(returnSecondFunction);         	
                     	//break;
                     	lock4 = true;
            		}
            		else
            		{
            			setTimeout(go3,500);
            		}
            	};
          
            	function go4()
            	{
            		if (lock4 == true)
            		{
                     	lock4 = false;
                     	runFile.runningExe(returnThirdFunction);
                     	//break;
                     	lock5 = true;
            		}
            		else
            		{
            			setTimeout(go4,500);
            		}
            	}
            //};


           //var mainExe = './main.exe';
            function go5()
            	{
            		if (lock5 == true)
            		{
                     	lock5 = false;
                     	returnfifthFunction = deleteStuff.deleteFunction(file,mainExe);
                     	//break;
            		}
            		else
            		{
            			setTimeout(go5,500);
            		}
            	}
              lock1 = true;
              go1();
              go2();
              go3();
              go4();
              go5();

        //event emmiters to make sure we trigger everything in approp. order



        //our promise chain, ensuring things finish in order


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