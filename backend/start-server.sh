#!/bin/bash

echo "🚀 Starting Webbeezwork Backend Server with Enhanced Logging"
echo "============================================================"

# Check if we're in the right directory
if [ ! -f "src/app.js" ]; then
    echo "❌ Error: src/app.js not found. Please run this script from the backend directory."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔧 Configuration:"
echo "   PORT: ${PORT:-5000}"
echo "   NODE_ENV: ${NODE_ENV:-development}"
echo "   EMAIL_USER: ${EMAIL_USER:-not-configured}"
echo ""

echo "🎯 Starting server..."
echo "📊 You can test the API with:"
echo "   Health check: curl http://localhost:5000/health"
echo "   Test form: ./test-api.sh"
echo ""
echo "📋 Server logs will appear below:"
echo "============================================================"

# Start the server
node src/app.js
