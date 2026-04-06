@echo off
REM NEMSS Birthday Email Scheduler Deployment Script
REM This script sets up environment variables and starts the birthday scheduler

echo Setting up NEMSS Birthday Email Scheduler...
echo.

REM Set SMTP environment variables
set SMTP_HOST=smtp.gmail.com
set SMTP_PORT=587
set SMTP_USER=nemss2014set@gmail.com
set SMTP_PASS=simf ytuo blvf zici
set SENDER_EMAIL=nemss2014set@gmail.com
set SENDER_NAME=NEMSS Family

echo Environment variables configured.
echo Starting birthday scheduler...

REM Change to the project directory
cd /d "%~dp0"

REM Start the scheduler with PM2 (if available) or directly with Node
where pm2 >nul 2>nul
if %errorlevel% equ 0 (
    echo Using PM2 for process management...
    pm2 start autoBirthdayScheduler.js --name "nemss-birthday-scheduler"
    pm2 save
    pm2 startup
    echo.
    echo Scheduler started with PM2!
    echo To check status: pm2 status
    echo To stop: pm2 stop nemss-birthday-scheduler
    echo To restart: pm2 restart nemss-birthday-scheduler
) else (
    echo PM2 not found. Starting directly with Node.js...
    echo Note: This will run in foreground. Use Ctrl+C to stop.
    node autoBirthdayScheduler.js
)

echo.
echo Deployment complete!
pause
