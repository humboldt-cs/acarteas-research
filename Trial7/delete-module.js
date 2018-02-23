
exports.deleteFunction =  function(file,mainExe)
{
	var temp = file;
    temp = temp.substring(0,temp.length - 3);
    fs.unlinkSync('./' + temp + 'obj');
    console.log('step ten: object deleted'); 

    //synchoronous delete of batch
	fs.unlinkSync('./' + 'compile.bat');
	console.log('step five: compile.bat deleted');

	// cleaning up files
    fs.unlinkSync('./' + mainExe);
    console.log('step eight: Main.exe deleted');

    //TODO: PUT THIS BACK IN WHEN WERE READY TO KILL THE ZIP!
    fs.unlinkSync('./' + file);
    console.log('step nine: Zip file deleted');

};
