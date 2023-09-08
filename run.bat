@echo off

set PATH=%~dp0nodeWindows;%PATH%
REM echo %PATH%
cd .\mainApp
call npm i
call npm run start
