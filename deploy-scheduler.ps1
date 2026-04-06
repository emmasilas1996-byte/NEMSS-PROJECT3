# NEMSS Birthday Email Deployment Script
# Run this with: powershell -ExecutionPolicy Bypass -File deploy-scheduler.ps1

Write-Host "Setting up NEMSS Birthday Email Scheduler..." -ForegroundColor Green
Write-Host ""

# Set SMTP environment variables
$env:SMTP_HOST = 'smtp.gmail.com'
$env:SMTP_PORT = '587'
$env:SMTP_USER = 'nemss2014set@gmail.com'
$env:SMTP_PASS = 'simf ytuo blvf zici'
$env:SENDER_EMAIL = 'nemss2014set@gmail.com'
$env:SENDER_NAME = 'NEMSS Family'

Write-Host "Environment variables configured." -ForegroundColor Yellow

# Change to the project directory
Set-Location $PSScriptRoot

# Check if PM2 is available
$pm2Available = Get-Command pm2 -ErrorAction SilentlyContinue

if ($pm2Available) {
    Write-Host "Using PM2 for process management..." -ForegroundColor Cyan

    # Start the scheduler
    & pm2 start autoBirthdayScheduler.js --name "nemss-birthday-scheduler"

    # Save PM2 configuration
    & pm2 save

    # Try to setup startup (may not work on Windows)
    try {
        & pm2 startup
    } catch {
        Write-Host "Note: PM2 startup setup may not work on Windows." -ForegroundColor Yellow
    }

    Write-Host ""
    Write-Host "Scheduler started with PM2!" -ForegroundColor Green
    Write-Host "To check status: pm2 status" -ForegroundColor Cyan
    Write-Host "To stop: pm2 stop nemss-birthday-scheduler" -ForegroundColor Cyan
    Write-Host "To restart: pm2 restart nemss-birthday-scheduler" -ForegroundColor Cyan
} else {
    Write-Host "PM2 not found. Starting directly with Node.js..." -ForegroundColor Yellow
    Write-Host "Note: This will run in foreground. Use Ctrl+C to stop." -ForegroundColor Yellow

    # Start directly with Node.js
    & node autoBirthdayScheduler.js
}

Write-Host ""
Write-Host "Deployment complete!" -ForegroundColor Green
Read-Host "Press Enter to exit"
