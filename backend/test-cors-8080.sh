#!/bin/bash

echo "🧪 Testing CORS Configuration for Port 8080"
echo "============================================="

# Test 1: Health check
echo "1️⃣ Testing health endpoint..."
curl -s http://localhost:5000/health | jq '.' || echo "Health check response received"

echo ""

# Test 2: CORS preflight for port 8080
echo "2️⃣ Testing CORS preflight for port 8080..."
curl -i -X OPTIONS http://localhost:5000/api/contact/submit \
  -H "Origin: http://localhost:8080" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type"

echo ""
echo ""

# Test 3: Actual POST request with port 8080 origin
echo "3️⃣ Testing POST request with port 8080 origin..."
curl -i -X POST http://localhost:5000/api/contact/submit \
  -H "Origin: http://localhost:8080" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User Port 8080",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "+233123456789",
    "service": "Web Development",
    "message": "This is a test message from port 8080 to verify CORS is working correctly."
  }'

echo ""
echo ""
echo "✅ CORS test completed!"
echo "📋 Check the backend terminal for CORS logging details."
