@ECHO off
IF NOT DEFINED IS_CHILD_PROCESS (CMD /K SET IS_CHILD_PROCESS=1 ^& %0 %*) & EXIT )
TITLE Bot
CLS
COLOR 3
ECHO.

SET cwd=%~dp0

IF EXIST index.js (
  node .
) ELSE (
  TITLE [ERROR] System Check Failed
  ECHO [Thom's]: System check failed. Check if your bot installed correctly.
  GOTO :EXIT
)
ECHO.

EXIT /B 0

:EXIT
ECHO.
ECHO [Bot]: Press any key to exit.
PAUSE >nul 2>&1
CD /D "%cwd%"
TITLE Windows Command Prompt (CMD)
COLOR