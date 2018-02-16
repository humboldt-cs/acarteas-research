exports.decompressFunction =  function(fileName, returnRename)
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(fileName, './').then(files => {
		//callback(fileName);
	    console.log('step 2: unzipping source.cpp files complete!');

	});

	return 0 + returnRename;
};