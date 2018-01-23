var compile_run = require('compile-run');
var path = require('path');


    compile_run.runFile('C:/Program Files (x86)/Microsoft Visual Studio/2017/Enterprise/VC/Tools/MSVC/14.12.25827/bin/Hostx64/x64/cl.exe C:/Users/Eric/Desktop/acarteas-research/tutorials practice/helloworld.cpp',"",function (stdout, stderr, err) {
       if(!err){
        console.log(err);
        console.log(stderr);
        console.log(stdout);
       }
       else{
        console.log(stdout,stderr);
       }
});
