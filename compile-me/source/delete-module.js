//cleans up our filefolder once we are done with our node code.
exports.deleteFunction =  function(file,mainExe,stuname,callback)
{
    var fs = require('fs');
    var objectfile;
    
    //make an array of our directory
    var filearray = fs.readdirSync('./'+stuname);
    //show whats in the array
    for(var i in filearray){
    	
    	//find our .obj
    	var lengthof = filearray[i].length;
    	var temp = filearray[i];	

    	if(temp[lengthof - 1] == 'j' && temp[lengthof - 2] == 'b' && temp[lengthof - 3] == 'o'){
    		//save the name of the object, which we didn't know.
    		objectfile = temp;
    	}		
    };

    //make our functions so we can deal with them in a promise
    let firstPromise = function(){
      return new Promise(function(resolve,reject){
      	//delete of object
	    fs.unlinkSync('./'+ stuname+'/' + objectfile);
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
      console.log('promises in delete are broken!');
    });

    callback();
};
