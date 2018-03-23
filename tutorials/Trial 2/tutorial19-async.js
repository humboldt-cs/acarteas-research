  var compile = require('./compile-module');
  var runFile = require('./run-module'); 
  var path = './main.exe';
  var sourcefile= 'helloworld.cpp';
  var async = require('async');


async.waterfall([compile.compileFunction(sourcefile),runFile.runningExe(path)],function(){
     console.log('functions have fired')
}); 