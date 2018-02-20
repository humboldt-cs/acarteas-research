exports.decompressFunction =  function(fileName,callback)
{

	//unzips the source file
	const decompress = require('decompress');
	 
	decompress(fileName, './').then(files => {
		//callback(fileName);
	    console.log('done!');
	    

	});
	callback(fileName,file);
	
};