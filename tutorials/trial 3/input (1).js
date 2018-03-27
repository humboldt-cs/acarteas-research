exports.inputRead=function(infileName)
{

	var fs = require('fs');
	var dout = '';




	fs.readFile('./'+ infileName, (err,data)=>{
		if (err) throw err;
		console.log(data);

		dout = data;

	});
	return dout;
}