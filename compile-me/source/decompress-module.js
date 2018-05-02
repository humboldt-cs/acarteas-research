//unzip the source.zip file and change it into non zipped pieces.
exports.decompressFunction =  function(path,stuname,callback)
{
	//npm we need
	const decompress = require('decompress');

	decompress(stuname + '/' + path , './' + stuname).then(files => {
	  	console.log('step 2: unzipping source.cpp files complete!');
			      
	   	callback();
	});
	
};