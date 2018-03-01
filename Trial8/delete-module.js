
exports.deleteFunction =  function(file,mainExe)
{
    var fs = require('fs');

	var temp = file;
    temp = temp.substring(0,temp.length - 3);
    fs.unlinkSync('./' + temp + 'obj');
    console.log('object deleted'); 

    //synchoronous delete of batch
	fs.unlinkSync('./' + 'compile.bat');
	console.log('compile.bat deleted');

	// cleaning up files
    fs.unlinkSync('./' + mainExe);
    console.log('Main.exe deleted');

    //TODO: PUT THIS BACK IN WHEN WERE READY TO KILL THE ZIP!
    fs.unlinkSync('./' + file);
    console.log('Zip file deleted');

    console.log('Step 5: delete module complete')

};
