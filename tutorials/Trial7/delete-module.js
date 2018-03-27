
exports.deleteFunction =  function(file,mainExe)
{
	var temp = file;
    temp = temp.substring(0,temp.length - 3);
    fs.unlinkSync('./' + temp + 'obj');
    console.log('step 8: object deleted'); 

    //synchoronous delete of batch
	fs.unlinkSync('./' + 'compile.bat');
	console.log('step 9: compile.bat deleted');

	// cleaning up files
    fs.unlinkSync('./' + mainExe);
    console.log('step 10: Main.exe deleted');

    //TODO: PUT THIS BACK IN WHEN WERE READY TO KILL THE ZIP!
    fs.unlinkSync('./' + file);
    console.log('step 11: Zip file deleted');

};
