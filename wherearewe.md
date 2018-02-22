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
Figured out the problem with our asyn issue. Some functions parameters were being passed and exicuting before they were intended. 



