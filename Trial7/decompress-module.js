exports.decompressFunction =  function(returnFirstFunction)
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(returnFirstFunction, './').then(files => {
		//callback(fileName);
	    console.log('step 2: unzipping source.cpp files complete!');

	});

	return returnFirstFunction;
	
};