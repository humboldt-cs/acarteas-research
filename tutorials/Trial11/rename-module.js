exports.renameFunction =  function(stuname,files, oldpath, callback)
{
 
	var fs = require('fs');

	//choose the path for the files on the server here:     	
	var newpath = './' +  files;

	//variable needed to check for folder
	var studentPath = './' + stuname + '/' + files;

	var checkit = fs.existsSync('./' + stuname);
    //if username doesn't exist, make it.
    if ( checkit ){
    	//nothing
    	//console.log('path exists, don\'t make a new one');
    }
    else {
    	//console.log('path doesn\'t exist.  new path made here: ' + studentPath);
    	//make the directory as the student name
    	fs.mkdirSync(stuname, []);
    }
    
    //list of variables we're using here.
    //oldpath = something.zip
    //stuname = em1909 
    //files = addtwo.zip
    //newpath = ./addtwo.zip
    //studentPath = './' + stuname

    //renames the zip file
    fs.renameSync(oldpath, newpath);

    //console.log('oldpath should be: '+ oldpath);
	//console.log('stuname should be: '+ stuname);
	//console.log('files should be: '+ files);
	//console.log('newpath should be: '+ newpath);
	//console.log('studentPath should be: '+ studentPath);

    //test - THIS WORKS, OUR FILE IS NOw moVED InTO A NEW LOCATION
    //THIS ALSO BREAKS THE REST OF THE CODE< BECAUSE ITS NOT DESIGNED FOR THE MOVE
	fs.renameSync(newpath, studentPath);    
        
    console.log('step 1: temp zip File acquired and named.');
    callback();
    //return newpath;
    //callback2();
    //return newpath;

};