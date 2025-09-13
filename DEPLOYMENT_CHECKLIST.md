# 🚀 Deployment Checklist

## ✅ Completed
- [x] Backend deployed to Render: https://webbeezwork.onrender.com
- [x] Frontend deployed to Vercel: https://webbeezwork-pearl.vercel.app
- [x] Removed .env files from git (security fixed!)
- [x] Updated CORS configuration for production domains
- [x] Git repository properly configured

## 🔧 Next Steps Required

### 1. Configure Render Environment Variables
Go to your Render dashboard and set these variables:

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

### 2. Configure Vercel Environment Variables
Go to your Vercel dashboard and set these variables:

```
VITE_API_URL=https://webbeezwork.onrender.com/api
VITE_APP_NAME=Webbeezwork
VITE_APP_VERSION=1.0.0
VITE_COMPANY_NAME=Webbeezwork Digital Marketing Agency
VITE_COMPANY_EMAIL=webbeezworkagency@gmail.com
VITE_COMPANY_PHONE=+233 XX XXX XXXX
VITE_COMPANY_WEBSITE=https://webbeezwork-pearl.vercel.app
```

### 3. Test the Connection
1. Visit: https://webbeezwork-pearl.vercel.app/contact
2. Fill out the contact form
3. Check your email for notifications
4. Check Render logs for backend activity

### 4. Redeploy (if needed)
After setting environment variables:
- Render: Trigger a manual deploy
- Vercel: Should auto-redeploy when you push to main

## 🔗 Important URLs
- **Frontend**: https://webbeezwork-pearl.vercel.app/
- **Backend**: https://webbeezwork.onrender.com
- **API Health**: https://webbeezwork.onrender.com/health
- **Contact API**: https://webbeezwork.onrender.com/api/contact/submit

## 🐛 Troubleshooting
- Check Render logs for backend errors
- Check browser dev tools for CORS issues
- Verify environment variables are set correctly
- Test email configuration with a simple form submission
