#!/bin/bash

echo "🚀 Starting Webbeezwork Development Environment"
echo "==============================================="

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Node.js is installed
if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command_exists npm; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📋 System Check:"
echo "   Node.js: $(node --version)"
echo "   npm: $(npm --version)"
echo ""

# Start backend
echo "🔧 Starting Backend Server..."
cd backend

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    npm install
fi

echo "🚀 Starting backend server on port 5000..."
node src/app.js &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Test if backend is running
if curl -s http://localhost:5000/health > /dev/null; then
    echo "✅ Backend server is running successfully!"
else
    echo "❌ Backend server failed to start"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

echo ""
echo "🎯 Development Environment Ready!"
echo "================================"
echo "📡 Backend API: http://localhost:5000"
echo "🌐 Frontend: http://localhost:5173"
echo "📧 Email configured: webbeezworkagency@gmail.com"
echo ""
echo "🧪 Test endpoints:"
echo "   Health check: curl http://localhost:5000/health"
echo "   Contact form: Open browser and go to frontend"
echo ""
echo "⏹️  To stop servers: Press Ctrl+C"
echo "================================"

# Keep script running
wait $BACKEND_PID
