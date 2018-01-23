//is this right? is this how you define the file?
var code = 'helloworld.cpp';
var input ='./';



var compile_run = require('compile-run');
    compile_run.runCpp(code, input, function (stdout, stderr, err) {
       if(!err){
       console.log(stdout);
        console.log(stderr);
       }
       else{
        console.log(err);
       }
    }
);