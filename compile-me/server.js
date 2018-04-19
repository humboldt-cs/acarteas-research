// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();
var bodyParser = require('body-parser');
util = require('util');              // define our app using express
//const formidable = require('express-formidable'); // call express formidable

console.log('HEre is a console log on line 10');

//including our node.js code
var node_code = require('./source/origin');

//include our app.js for views
//var app_code = require('./src/App');

var port = process.env.PORT || 8001;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging

    var formidable = require('formidable');
    var form = new formidable.IncomingForm();

    files = [],
   	fields = [];
    var uname;

    form.on('field' ,function(field,value){
    	fields.push([field,value])
    	//console.log('this should show our field and vlaue'+field,value);
    });

    form.parse(req, function (err, fields, files){
      //grab the file name of *.zip:  addtwo.zip
        var file = files.filetoupload.name;
        //grab the name of the value of usersname in text field: em1909
        var stuname = fields['uname'];

        var pa = fields['paNumber'];

        var input_vals = fields['input'];

        var oldpath = files.filetoupload.path;

        console.log('file: ' + file);
        console.log('student name: ' + stuname);
        console.log('Programming assignment: ' + pa);
        console.log('inputs here: ' + input_vals);
        console.log('Old Path: ' + oldpath);
        node_code.LaunchNode(file,stuname,pa,input_vals,oldpath,function(){
            res.send(util.inspect({fields: fields}));
        });

        return res.end();
    });


    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});




// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Compiling code.  Standby!' });
    console.log('HEre is a console log on line 79');
});

// more routes for our API will happen here
router.post('/', function(req, res) {
    //we want to get stuname
    //we want to access the folder made for Stuname
    //We want to read that file in stuname folder
    //output the contents of student file to text box

     var feildname = fields['uname'];

    console.log('HEre is a console log on line 88');
    //res.send({"message":"req.body.uname"}); 
    console.log('this is student name: ' + fields.adName);

});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
