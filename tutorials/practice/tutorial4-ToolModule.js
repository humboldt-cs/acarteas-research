//package we need for urlsplitter
var url = require('url');
//url address we are receiving or sending
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//parse command that cuts it to pieces
var q = url.parse(adr, true);

//

exports.urlSplitter = function (q) {

	console.log(q.host); //returns 'localhost:8080'
	console.log(q.pathname); //returns '/default.htm'
	console.log(q.search); //returns '?year=2017&month=february'

	var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
	console.log(qdata.month); //returns 'february'

	return qdata;
};





