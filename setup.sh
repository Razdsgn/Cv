#!/bin/bash

# Amir Mohseni Portfolio - Setup Script
# This script helps you set up your portfolio website quickly

echo "🚀 Setting up Amir Mohseni Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
else
    echo ""
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create public directory if it doesn't exist
if [ ! -d "public" ]; then
    mkdir public
    echo "📁 Created public directory for your images"
    echo ""
fi

# Display success message
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Edit app/page.tsx to customize your content"
echo "4. Add your images to the public/ folder"
echo ""
echo "Happy coding! 🚀"
