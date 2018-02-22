exports.decompressFunction =  function(mainExe)
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(mainExe, './').then(files => {
		//callback(fileName);
	    console.log('step 2: unzipping source.cpp files complete!');

	});

	return 0;
	
};