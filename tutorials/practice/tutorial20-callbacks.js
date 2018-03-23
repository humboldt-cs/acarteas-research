const util = require ('util');
const setTimeoutPromise = util.promisify(setTimeout);


let fourSecondTimeout = function(callback){
	
	setTimeoutPromise(4000).then(() => {
	//do things after 40 miliseconds.
	console.log('second');
	callback();
	}); 
};

let returnFive = function() {
	console.log("third");
};

console.log('first');

fourSecondTimeout(returnFive);