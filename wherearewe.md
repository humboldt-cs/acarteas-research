#1.26.18
#we now have a working compile.js module!

'adam-test-jk.js' is a functional exportable module, which will take as a parameter the name of the 'sourcecode.cpp' file, and create with the batfile 'compilejk.bat'.
note that we are hardcoded with pathing to run on the development server platform!

#what we need

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

*.cpp will be the thing we need to add, instead of using the name of the file.  

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

still trying to fijgure out how to delete obj.  we COULD unzip and run in a seperate temp folder, and then del '*.*'

currently "main.exe" is running in the same shell, so it may be that we could make a bat to run it seperately in a new shell; thus we are able to delete or move the object later.

went deep into formidable and recovered a field, pushed it into an array, and called it later (for housekeeping reasons and to differentiate users).

#3.7.18

successfully created a directory to move files.
successfully moved a file into new location.  

next step is compiling in new directory (or moving things as the last step before delete)

##hackathon
free food
no cost
project

####cons:
working with members of the community (highschoolers) with lower standards
in the library 

---

##research
looks good on res
get into grad school
offers different experience

####cons:
price tag - travel, stay, food, get in.
travel time
unsexy topic choice -- not parallel computing
people

---

Hackathon chosen.



