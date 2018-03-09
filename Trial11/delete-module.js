
exports.deleteFunction =  function(file,mainExe,stuname,callback)
{
    var fs = require('fs');
    var objectfile;
    var filearray = fs.readdirSync('./'+stuname);
    for(var i in filearray){
    	console.log('This is file ' + filearray[i] + ' at location ' + i);
    	var tempobject = filearray[i].length;
    	if (filearray[i] ){

    	}

    	//objectfile = filearray.find(funciton('.obj'){
    	//	console.log('this is object file ' + objectfile);		
    	//});				
    }

    


    //make our functions so we can deal with them in a promise
    let firstPromise = function(){
      return new Promise(function(resolve,reject){
      	//delete of object

      	//we need to locate the name of the .obj file.  or locate the .cpp file name.
      	var temp = file;
	    temp = temp.substring(0,temp.length - 3);
	    //fs.unlinkSync('./'+ stuname+'/' + file + '.obj');
	    console.log('object deleted'); 
      	resolve('firstPromise');   
      });
    };

    let secondPromise = function() {
      return new Promise(function(resolve,reject){
        //synchoronous delete of batch
		fs.unlinkSync('./' + 'compile.bat');
		console.log('compile.bat deleted');
        resolve('secondPromise');  
      });        
    };


    let thirdPromise = function() {
      return new Promise(function(resolve,reject){
        //delete zip
	    fs.unlinkSync('./' + stuname +'/'+ file);
	    console.log('Zip file deleted');
        resolve('thirdPromise');
      });          
    };

    //code not in use, main cannot be deleted.
    let fourthPromise = function() {
      return new Promise(function(resolve,reject){
      	// delete main.exe
      	//ISSUE: cannot delete main, possible that its currently in use in window.
	    setTimeout( fs.unlinkSync('./' +stuname+'/'+ mainExe), 500 );
	    console.log('Main.exe deleted');

	    console.log('Step 5: delete module complete'); 
        resolve('fourthPromise');  
      });         
    };   
    
 //our promise chain, ensuring things finish in order.
    firstPromise().then(function(){
      return secondPromise();
    }).then(function(){
      return thirdPromise();
    }).catch(function(){
      console.log('promises in delete are broke af');
    });

    callback();
};
