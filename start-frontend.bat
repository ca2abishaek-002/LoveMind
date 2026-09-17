@echo off
set "NODE_HOME=C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\tools\node-v20.18.0-win-x64"
set "PATH=%NODE_HOME%;%PATH%"

cd /d "C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\frontend"
echo Starting React frontend on port 5173...
call npm run dev
