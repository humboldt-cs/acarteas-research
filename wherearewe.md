# 1.26.18
## we now have a working compile.js module!

'adam-test-jk.js' is a functional exportable module, which will take as a parameter the name of the 'sourcecode.cpp' file, and create with the batfile 'compilejk.bat'.
note that we are hardcoded with pathing to run on the development server platform!

# what we need

we will eventually need to switch to SDK.

we need to make a run module to 
1.  execute our .exe
2.  pass input parameters
3.  save output

--

display output in HTML

--

# 1.30.18

1. we need to make callbacks to stagger dependencies between aynsc calls.

2. make .bat files programmatically.

3. 


# 2.2.18

1.  need more effective callbacks.  explored with npm's (async and others), not much success.

2.  we need to go back to basics.  look at the code line by line, refactor, putting more in more breakpoints so that we can understand our codebase better.  and be cleaner!


#2.5.18

what we did:

We are now able to capture output in a text document.  and compile, and run, within a served webpage.

we understand callbacks more clearly. 

we are using modularized code for abstraction.  x2.



what we need:

1. Ambiguously name our sourcefiles.  

2. inputs to file.exe.  

3. file directory saving.

4. we need to keep listening so server stays on for multiple users. //ask adam

5. show "output versus expected" on our exit page.  



-----
# 2.13.18
the search for another objective
1. we want to take in the file as a .zip.  then we must unzip the thing.

(star).cpp will be the thing we need to add, instead of using the name of the file.  

# 2.15.2018
working on inputs
1. piping inputs in to our generated main
2. we're braking on the output in the runexe module 





#adam carter meet 2.15

we need to move the temp file into file directory, and do some tests in a live envrionment.  

#2.16.18

in callhell.  blocking options do not help.

remove dependency chain, add events to fire functions.

following research link:
https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm




#2.19.18

used and learned event emitters for synchonronus firing.  unfortuantely, its front end; they FIRE in order.  we are NOT waiting for FINISH before the next executes.

Lesson learned.  

will need the callbacks.

#2.20.18

worked with callbacks and built several structures to handle them.  Currently, they still lack firing in order. 

next to do: figure out how promises work.  then make a promise factory and maybe modularize it.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

promisejs.org

#2.22.18
Figured out the problem with our asyn issue. Some functions parameters were being passed and exciuting before they were intended. 

#2.23.18

more promise issues.  current error we are receiving is the third step firing before everything else.  why is this the case?  Also cleaned up our code base, added and updated a new module to handle our delete calls seperately.  added delete module to promises.

#2.23.18
Still having the same issue as before however we have an inkling. MOAR BLOCKING IN A  CHAINNNNNNNNN. Last resort modularize our compile module into two modules.

#2.27.18
mutex or semaphore
have global variable = false
spinlock

while sleep
y=2; 
while (lock == false)
{
	sleep(500);

}
lock = false;
y= 5;
x(y){lock = true};


-----------


function go()
{
	if(lock == true)
	{
		lock = false;
		//do work;
	}
	else
	{
		setTimeout(go,500);
	}
}

#3.1.18

async call to exec is running out of order ; regardless of our spinlocks.  trying for execFileSync()

from here: https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback

#3.2.18

we worked on callbacks.  maincallback chain in origin.js is working until "step 3: compile.bat has been made".  next step is callbacks in run.  then delete.  

#3.5.18

added a promise chain to delete module. 

full functionality is restored to the APP!

we need to locate the name of the .obj file.  or locate the .cpp file name, so as to delete it IF IT DIFFERS FROM  the name of the .zip!

thought; we could force a rename so we automatically know the name of the file.

#3.6.18

still trying to figure out how to delete obj.  we COULD unzip and run in a seperate temp folder, and then del '*.*'

currently "main.exe" is running in the same shell, so it may be that we could make a bat to run it seperately in a new shell; thus we are able to delete or move the object later.

went deep into formidable and recovered a field, pushed it into an array, and called it later (for housekeeping reasons and to differentiate users).

# 3.7.18

successfully created a directory to move files.
successfully moved a file into new location.  

next step is compiling in new directory (or moving things as the last step before delete)

---

#3.8.2018
We have manged to move all files and compiles in a subfolder for testing.
We are now working on our delete module which will hve an added find feature locating
the .obj file and deleting it. 
Saved out put of running programs.
can make more than 1 new directiory with our conflicts 'stress tested'


# 3.9.18
fixed and cleaned up filebase.
we have located all our files.  
we have deleted our .obj!
fixed issue with  existing directories.
fixed issue with broken promise exception.
stress test complete; multiple users!

now looking into MERN
for react:
https://reactjs.org/tutorial/tutorial.html

for mern:
http://mern.io/

# 3.20.18

installed react on the server.  

updated steps on readme.

followed the youtube tutorial for reactJS
current progress is here:
https://youtu.be/A71aqufiNtQ?t=1144

# 3.21.18

we ended the video here 
https://youtu.be/A71aqufiNtQ?t=2461

# 3.22.18

have to figure out how to get mern started
requires mongodb to be on 

# 3.26.18

mongodb is disappearing on the server after install.  
solution not listed on the internet.  
no solutions found after a full two hours.  

moving to local environment for the stack -- we will talk to adam about options for the server once we have him available.

# 4.2.18

https://reactjs.org/tutorial/tutorial.html

https://github.com/esausilva/example-create-react-app-express/blob/master/package.json

two more examples we've looked through!

we can run a server and run our frontpage.

# 4.3.18


express app REST tutorial

expose these end points to give our react app data

a way to upload data ; creating the end point -- a rest endpoint that accepts a file to upload.  thats when we plug in the code that we've already written.

when we send that information what should be returned is the results.


don't worry about react right now.  focus on creating that endpoint.

create the model (data).  


# 4.4.18

https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09

how do we make a model?  and also what is a model

how do get mongo on server?   it does not stay installed.  removed immediately.

so we can create a port.listen in our server instead of a connection to mongodb....right?

we think that mongoose is a wrapper that hands off objects to and from express.  true?



# 4.5.18

models: assignment
pA
file
inputs
outputs

model: user
username

use express to callback at the end of our node code and create a return to our model view.  research how to return data back to the view.

# 4.6.18

we have built routes and exposed endpoints!

we can send data through a post

we are catching data in server on a different port.

fromidible is parsing our multipart form.

we are seeing json results returned.

next step:

recover form objects from our router.post (req) parameter. (its in JSON format).


# 4.9.18

- (React) we have successfully served a react front page and created a form submission,
- (Express) listened for and caught the request on a seperately running port (endpoint),
- (node) ran our code successfully!


# 4.10.18

fixed node code, currently having problems with ports 8001.

# 4.12.18 + 4.11.18
fixed our ports!

# 4.13.18

//toDO:
backend:
- inputs
- change SDK
front end: 
- unit testing
- form rejection and resubmit
- serve a results page


for inputs:
https://ubuntuforums.org/showthread.php?t=2223392
$ lcase < hello.txt
hello world!


front end switching views
https://www.youtube.com/watch?v=fGQFeV32nwE&index=16&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8

# 4.18.18

researched what we were doing wrong.  also, express doesn't know how to call app.js stuff.  so we need to find a way to grab our data and return it somehow.  possibly by saving in state?
we made a component, and a react fragment. and we made a function that called our second render, giving us a new page without changing the URL.

# 4.19.18

We're still trying to figure out how to send information from node to express to react text-
box.



# 4.20.18

capturing information in state, and binding and setting that information in another component.

currently using this guide:

https://stackoverflow.com/questions/47205305/fetch-post-returns-only-id-object-in-express-api-server-react-frontend

we have added code to output.jsx.   this code hasn't been tested, and will need to add the appropriate calls maybe, to the states.


# 4.24.18

so lets break this problem down.
we discovered the way we are trying to implement our react and express is the hard, non correct way.  we are causing ourselves problems.

better way to do this is through the tools already created.  so lets build something small and SEE THE WAY ITS SUPPOSED TO WORK.

everything's on fire.  and we're fine with that.


# 4.26.18

discovered that what we were lacking was a "template" or "view engine" that would return a specific view.  there were many choices, including pug, jade, and others.  chose pug.  

# 4.27.18
good reference guide:
https://expressjs.com/en/guide/using-template-engines.html

another good reference for json objects:
https://stackoverflow.com/questions/21843840/what-does-res-render-do-and-what-does-the-html-file-look-like?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

we have successfully passed variables from a form to a second page and displayed them through express; between two views in react.  
we are currently trying to do a fs.readfile of output.txt to display by writing node code, through express routing, on a react view.
so we are writing more server code to read an output file and display it.  

closer to a delieverable!

# 5.1.18

we went the wrong way with pug.  new direction; going back to the basics of react and making it do what we want.  even if we have to break it.

we have to kill the pug.

# 5.2.18

Fixed bugs, killed white space and added comments.
The bug wasn't returning because of a pathing issue.
We some what have a deliverable.
Hello World


End_of_research_grant(){
	Thanks for all the fish!
}; 