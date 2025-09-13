# Environment Configuration Guide

This document explains how to set up environment variables for both development and production environments.

## 🔐 Security Notice
**NEVER commit `.env` files to git!** They contain sensitive information like email passwords and API keys.

## 📁 File Structure
```
backend/
├── .env                    # Your local backend config (not in git)
└── .env.example           # Template for backend config

frontend/
├── .env                   # Your local frontend config (not in git)  
├── .env.example          # Template for development
└── .env.production.example # Template for production
```

## 🛠️ Development Setup

### Backend (.env)
Copy `backend/.env.example` to `backend/.env` and fill in your values:
```bash
cp backend/.env.example backend/.env
```

Key variables:
- `EMAIL_USER`: Your Gmail address (webbeezworkagency@gmail.com)
- `EMAIL_PASS`: Your Gmail app password (not regular password!)
- `FRONTEND_URL_LOCAL`: http://localhost:8080 (for local development)

### Frontend (.env)
Copy `frontend/.env.example` to `frontend/.env` and fill in your values:
```bash
cp frontend/.env.example frontend/.env
```

For development, use: `VITE_API_URL=http://localhost:5000/api`

## 🚀 Production Setup

### Render (Backend)
Set these environment variables in your Render dashboard:
```
NODE_ENV=production
PORT=5000
WEBSITE_URL=https://webbeezwork-pearl.vercel.app
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=webbeezworkagency@gmail.com
EMAIL_PASS=ziax xbow acaj jcaz
COMPANY_EMAIL=webbeezworkagency@gmail.com
COMPANY_NAME=Webbeezwork Digital Marketing Agency
FRONTEND_URL_LOCAL=http://localhost:8080
FRONTEND_URL_PRODUCTION=https://webbeezwork-pearl.vercel.app
MAX_REQUESTS_PER_HOUR=10
```

### Vercel (Frontend)
Set these environment variables in your Vercel dashboard:
```
VITE_API_URL=https://webbeezwork.onrender.com/api
VITE_APP_NAME=Webbeezwork
VITE_APP_VERSION=1.0.0
VITE_COMPANY_NAME=Webbeezwork Digital Marketing Agency
VITE_COMPANY_EMAIL=webbeezworkagency@gmail.com
VITE_COMPANY_PHONE=+233 XX XXX XXXX
VITE_COMPANY_WEBSITE=https://webbeezwork-pearl.vercel.app
```

## 🔗 Production URLs
- **Frontend**: https://webbeezwork-pearl.vercel.app/
- **Backend**: https://webbeezwork.onrender.com
- **API Endpoint**: https://webbeezwork.onrender.com/api

## 🧪 Testing the Connection
1. Frontend should connect to: `https://webbeezwork.onrender.com/api`
2. Backend should allow CORS from: `https://webbeezwork-pearl.vercel.app`
3. Emails should use the Vercel URL in templates

## ⚠️ Important Notes
- **Gmail App Passwords**: Use app-specific passwords, not your regular Gmail password
- **CORS**: Both production URLs are configured in the backend
- **Environment Variables**: Set them in the respective platform dashboards, not in code
