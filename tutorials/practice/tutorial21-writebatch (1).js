//exports.writeOut = function(fileName, data)
//{

	//tutorial to write and delete files!
	file = 'hey.bat';
	data = 'echo hey you\n@REM this is the second line';

	var fs = require('fs');

	fs.writeFileSync(file,data);

	console.log('bat made');
	//
	fs.unlinkSync('./' + file);
	console.log('deleted');
//};