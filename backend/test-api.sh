#!/bin/bash

echo "🧪 Testing Contact Form API with Enhanced Logging"
echo "================================================"

# Test health endpoint
echo "1. Testing health endpoint..."
curl -X GET http://localhost:5000/health
echo -e "\n"

# Test contact form submission
echo "2. Testing contact form submission..."
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "+1234567890",
    "service": "Web Development",
    "message": "This is a test message to verify the logging system is working properly."
  }'
echo -e "\n"

echo "3. Check your backend console for detailed logging output!"
echo "================================================"
