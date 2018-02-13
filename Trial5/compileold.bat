@REM soft coded example
SET vsCommand=%1
ECHO %vsCommand%
SET localPath=%2
ECHO %localPath%
@REM SET cppFiles=%3
@REM SET outputFileExe=%4
@REM call %vsCommand%
@REM cd /C %localPath%
@REM cl %cppFiles% /Fe%outputFileExe

@REM hard-coded example
call "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat"
CD "C:\Users\research\Desktop\acarteas-research\Trial 3"
cl.exe helloworld.cpp /Femain.exe