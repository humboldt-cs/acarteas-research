exports.decompressFunction =  function(path,stuname,callback)
{

	//unzips the source file
	const decompress = require('decompress');


	 
	decompress(stuname + '/' + path , './' + stuname).then(files => {
	  	console.log('step 2: unzipping source.cpp files complete!');
			      
	   	callback();
	});
	//callback();
	//callback2;

	//return 'main.exe';
	
};