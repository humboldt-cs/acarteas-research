var fs = require('fs');
var unzip = require('unzip');

//works.  needs the name and it doesn't take star.

fs.createReadStream('./addtwo.zip').pipe(unzip.Extract({ path: 'output/path' }));