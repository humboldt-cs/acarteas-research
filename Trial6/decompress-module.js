exports.decompressFunction = function(fileName, callback )
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(fileName, './').then(files => {
	    console.log('done!');
	    callback(fileName);
	});

};