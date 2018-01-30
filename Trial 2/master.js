var compile = require('./modules/compile-module');
var runFile = require('./modules/run-module');
var htmlstuff = require('./modules/HTMLcreateListen-module');
var path = './main.exe';
var sourcefile = 'helloworld.cpp';

htmlstuff.htmlListen();

compile.compileFunction(sourcefile);

runFile.runningExe(path);

