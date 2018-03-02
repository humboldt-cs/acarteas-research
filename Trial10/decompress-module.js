exports.decompressFunction =  function(path)
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(path, './').then(files => {
	    console.log('step 2: unzipping source.cpp files complete!');

	});

	//return 'main.exe';
	
};