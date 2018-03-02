exports.renameFunction =  function(files, oldpath, callback)
{
 
	var fs = require('fs');
	//choose the path for the files on the server here:
	//relative paths      	
    var newpath = './' + files;

    fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        console.log('step 1: temp zip File acquired and named.');
        callback();
    });

    return newpath;

};