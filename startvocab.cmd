@ECHO OFF
START http://localhost:8001
call npm run dev -- --port 8001
PAUSE