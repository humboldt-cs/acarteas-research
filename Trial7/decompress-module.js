exports.decompressFunction =  function(newpath)
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(newpath, './').then(files => {
		//callback(fileName);
	    console.log('step 2: unzipping source.cpp files complete!');

	});

	return 1;
	
};