//source file needs a name.  doesn't work with *.  why?
const decompress = require('decompress');
 
decompress('addtwo.zip', './').then(files => {
    console.log('done!');
});