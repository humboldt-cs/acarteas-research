const decompress = require('decompress');
 
//needs the name and it doesn't take star.

decompress('addtwo.zip', './').then(files => {
    console.log('done!');
});