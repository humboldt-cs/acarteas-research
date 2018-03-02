exports.renameFunction =  function(files, oldpath, callback)
{
 
	var fs = require('fs');
	//choose the path for the files on the server here:
	//relative paths      	
    var newpath = './' + files;

    fs.renameSync(oldpath, newpath);
        
    console.log('step 1: temp zip File acquired and named.');
    callback();
    return newpath;
    //callback2();
    //return newpath;

};