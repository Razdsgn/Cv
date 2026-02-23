@echo off
REM Amir Mohseni Portfolio - Setup Script for Windows
REM This script helps you set up your portfolio website quickly

echo.
echo 🚀 Setting up Amir Mohseni Portfolio...
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node -v
echo.

REM Check if npm is installed
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

echo ✅ npm is installed
npm -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
echo This may take a few minutes...
echo.
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ Dependencies installed successfully!
    echo.
) else (
    echo.
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Create public directory if it doesn't exist
if not exist "public" (
    mkdir public
    echo 📁 Created public directory for your images
    echo.
)

REM Display success message
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Run 'npm run dev' to start the development server
echo 2. Open http://localhost:3000 in your browser
echo 3. Edit app/page.tsx to customize your content
echo 4. Add your images to the public/ folder
echo.
echo Happy coding! 🚀
echo.
pause
