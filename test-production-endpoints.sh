#!/bin/bash

echo "🧪 Testing Production Endpoint Coordination"
echo "==========================================="

# Test 1: Backend Health Check
echo "1️⃣ Testing Backend Health (Render)..."
echo "URL: https://webbeezwork.onrender.com/health"
curl -s https://webbeezwork.onrender.com/health | jq '.' 2>/dev/null || echo "Health check response received"

echo ""
echo ""

# Test 2: Frontend Accessibility
echo "2️⃣ Testing Frontend (Vercel)..."
echo "URL: https://webbeezwork-pearl.vercel.app/"
curl -s -I https://webbeezwork-pearl.vercel.app/ | head -n 1

echo ""
echo ""

# Test 3: CORS Preflight Test
echo "3️⃣ Testing CORS Preflight (Vercel → Render)..."
curl -i -X OPTIONS https://webbeezwork.onrender.com/api/contact/submit \
  -H "Origin: https://webbeezwork-pearl.vercel.app" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  --max-time 10

echo ""
echo ""

# Test 4: API Connection Test
echo "4️⃣ Testing API Connection (Production)..."
curl -i -X POST https://webbeezwork.onrender.com/api/contact/submit \
  -H "Origin: https://webbeezwork-pearl.vercel.app" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Production Setup",
    "email": "test@example.com",
    "company": "Test Company",
    "phone": "+233123456789",
    "service": "Web Development",
    "message": "Testing production coordination between Vercel frontend and Render backend."
  }' \
  --max-time 15

echo ""
echo ""
echo "✅ Production coordination test completed!"
echo ""
echo "📋 Endpoint Summary:"
echo "   🎨 Frontend: https://webbeezwork-pearl.vercel.app/"
echo "   ⚙️  Backend:  https://webbeezwork.onrender.com"
echo "   📡 API:      https://webbeezwork.onrender.com/api"
echo ""
echo "🔧 Next steps:"
echo "   1. Set environment variables on both platforms"
echo "   2. Test the contact form on your live website"
echo "   3. Check email delivery"
