@REM soft coded example
SET vsCommand=%1
ECHO %vsCommand%
SET localPath=%2
ECHO %localPath%
SET cppFiles=%3
SET outputFileExe=%4
call %vsCommand%
cd /C %localPath%
cl %cppFiles% /Fe%outputFileExe

@REM hard-coded example
@REM call "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat"
@REM CD "C:\Users\research\Desktop\acarteas-research\Trial 3"
@REM cl.exe helloworld.cpp /Femain.exe