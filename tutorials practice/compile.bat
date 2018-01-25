SET vsCommand=%1
SET localPath=%2
SET cppFiles=%3
SET outputFileExe=%4
call %vsCommand%
cd /D %localPath%
cl %cppFiles% /Fe%outputFileExe

@REM hard-coded example
@REM call "C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\Tools\VsDevCmd.bat"
@REM CD /D "D:\code\acarteas-research\tutorials practice"
@REM cl.exe helloworld.cpp /Femain.exe