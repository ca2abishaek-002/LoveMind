@echo off
set "JAVA_HOME=C:\Program Files\Microsoft\jdk-21.0.12.101-hotspot"
set "MAVEN_HOME=C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\tools\apache-maven-3.9.8"
set "NODE_HOME=C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\tools\node-v20.18.0-win-x64"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%NODE_HOME%;%PATH%"

echo ========================================
echo STEP 1: Installing frontend dependencies
echo ========================================
cd /d "C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\frontend"
call npm install
if errorlevel 1 (
    echo FRONTEND NPM INSTALL FAILED
    exit /b 1
)
echo FRONTEND NPM INSTALL SUCCESS

echo ========================================
echo STEP 2: Compiling Spring Boot backend
echo ========================================
cd /d "C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\backend"
call mvn compile -q
if errorlevel 1 (
    echo BACKEND COMPILE FAILED
    exit /b 1
)
echo BACKEND COMPILE SUCCESS

echo ========================================
echo ALL BUILDS COMPLETE
echo ========================================
