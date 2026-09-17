@echo off
set "JAVA_HOME=C:\Program Files\Microsoft\jdk-21.0.12.101-hotspot"
set "MAVEN_HOME=C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\tools\apache-maven-3.9.8"
set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"

cd /d "C:\Users\chand\.gemini\antigravity\scratch\character-dating-app\backend"
echo Starting Spring Boot backend on port 8080...
call mvn spring-boot:run
