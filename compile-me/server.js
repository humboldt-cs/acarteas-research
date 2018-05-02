// call express
var express    = require('express'); 
// define our app using express       
var app        = express();		 			
util = require('util');             
//set out view controller
app.set("view engine", "pug");
//including our node.js code
var node_code = require('./source/origin');
//including filesystem for readfile
var fs = require('fs');
// set our port
var port = process.env.PORT || 8001;        

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do some piece of middlewhere code here
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Compiling code.  Standby!' });
    console.log('HEre is a console log on line 84 of get');
});

// more routes for our API will happen here
router.post('/', function(req, res) {
//grab our form
    var formidable = require('formidable');
    var form = new formidable.IncomingForm();
    //populate its arrays
    files = [],
   	fields = [];
    var uname;

    form.on('field' ,function(field,value){
    	fields.push([field,value])
    });

    form.parse(req, function (err, fields, files){
      //grab the file name of *.zip:  addtwo.zip
        var file = files.filetoupload.name;
        //grab the name of the value of usersname in text field: em1909
        var stuname = fields['uname'];
        var pa = fields['paNumber'];
        var input_vals = fields['input'];
        var oldpath = files.filetoupload.path;
        
        //create output
		var output_text;

	      	//our node code! this will unzip, compile, and save output.
        	node_code.LaunchNode(file,stuname,pa,input_vals,oldpath);
		  
		  	//render into a view with PUG
        	res.render("Output",{
        		user:stuname,
        		pa:pa,
        		data:output_text

        	});

    }); //end form   

}); //end router post

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
