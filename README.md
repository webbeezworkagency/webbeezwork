# Webbeezwork Contact Form System

## 🚀 Complete Professional Contact Form System

This is a full-stack contact form system built for Webbeezwork Webbeezwork Digital Marketing Agency, featuring professional email automation, robust validation, and modern UI/UX.

## 📋 System Overview

### Frontend (React + TypeScript + Tailwind CSS)
- Modern, responsive contact form with real-time validation
- Professional UI with success/error states
- Integration with backend API
- TypeScript for type safety

### Backend (Node.js + Express + Nodemailer)
- RESTful API with Express.js
- Dual email system (user confirmation + company notification)
- Professional HTML email templates
- Rate limiting and security features
- Input validation and spam protection

## 🛠️ Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

#### Configure Environment Variables
Update `.env` file with your email configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Company Settings
COMPANY_EMAIL=webbeezworkagency@gmail.com
COMPANY_NAME=Webbeezwork Webbeezwork Digital Marketing Agency

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Security
MAX_REQUESTS_PER_HOUR=10
```

#### Start Backend Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
```

#### Configure Environment Variables
Update `.env` file:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Company Information
VITE_COMPANY_EMAIL=webbeezworkagency@gmail.com
VITE_COMPANY_PHONE=+233 24 123 4567
```

#### Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📧 Email Configuration

### For Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

### For Other Email Providers:
Update the following in `.env`:
- `EMAIL_HOST`: Your SMTP server
- `EMAIL_PORT`: SMTP port (usually 587 for TLS, 465 for SSL)
- `EMAIL_SECURE`: true for SSL, false for TLS
- `EMAIL_USER`: Your email address
- `EMAIL_PASS`: Your email password or app password

## ✨ Features

### 🔒 Security
- Rate limiting (10 requests per hour per IP)
- Input validation and sanitization
- Spam detection
- CORS protection
- Security headers

### 📧 Email System
- **User Confirmation Email**: Professional branded email with company information
- **Company Notification Email**: Detailed submission with quick action buttons
- HTML and plain text templates
- Responsive email design

### 🎨 Frontend Features
- Real-time form validation
- Professional success/error messaging
- Responsive design
- Loading states and animations
- TypeScript type safety

### 🛡️ Backend Features
- RESTful API design
- Comprehensive error handling
- Request logging
- Environment-based configuration
- Production-ready architecture

## 🔌 API Endpoints

### POST `/api/contact/submit`
Submit a contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ACME Corp",
  "phone": "+1234567890",
  "service": "Web Development",
  "message": "I need a new website..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon.",
  "data": {
    "userEmailSent": true,
    "companyNotified": true
  }
}
```

### GET `/api/contact/test`
Test API connectivity

### GET `/health`
Health check endpoint

## 🚀 Production Deployment

### Backend Deployment
1. Set `NODE_ENV=production`
2. Use a production email service (SendGrid, AWS SES, etc.)
3. Configure proper domain for `FRONTEND_URL`
4. Set up monitoring and logging
5. Use a process manager like PM2
6. Set up SSL certificates

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to your hosting platform (Vercel, Netlify, etc.)
3. Update `VITE_API_URL` to your production backend URL

## 📊 Monitoring

The system logs:
- All form submissions
- Email sending status
- API errors
- Potential spam attempts

Monitor these logs for:
- Submission patterns
- Email delivery issues
- Error rates
- Security threats

## 🔧 Customization

### Email Templates
Edit templates in `backend/src/services/emailService.js`:
- `generateUserConfirmationTemplate()`: User confirmation email
- `generateCompanyNotificationTemplate()`: Company notification email

### Validation Rules
Modify validation in `backend/src/middleware/validation.js`

### Frontend Styling
Update styles in `frontend/src/components/ContactForm.tsx`

## 🆘 Troubleshooting

### Common Issues

1. **Email not sending**
   - Check email credentials in `.env`
   - Verify SMTP settings
   - Check for 2FA/app passwords

2. **CORS errors**
   - Ensure `FRONTEND_URL` is correctly set
   - Check that frontend and backend URLs match

3. **Form validation errors**
   - Check console for detailed error messages
   - Verify all required fields are filled

4. **Rate limiting**
   - Default limit is 10 requests per hour
   - Adjust `MAX_REQUESTS_PER_HOUR` if needed

## 📞 Support

For technical support or questions about this contact form system, please reach out to the development team.

---

**Built with ❤️ for Webbeezwork Webbeezwork Digital Marketing Agency**
