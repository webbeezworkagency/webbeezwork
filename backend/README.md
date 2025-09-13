# Webbeezwork Backend API

Professional backend service for the Webbeezwork Webbeezwork Digital Marketing Agency contact form system.

## Features

- 🔒 **Security First**: Rate limiting, input validation, and spam protection
- 📧 **Dual Email System**: Automatic user confirmations and company notifications
- ✅ **Input Validation**: Comprehensive form validation with detailed error messages
- 🚀 **Professional Templates**: Branded HTML email templates
- 📊 **Monitoring**: Request logging and error tracking
- 🌍 **CORS Enabled**: Secure cross-origin requests from frontend

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Copy `.env` file and update with your email configuration:

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

### 3. Email Provider Setup

#### For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `EMAIL_PASS`

#### For Other Providers:
Update `EMAIL_HOST`, `EMAIL_PORT`, and `EMAIL_SECURE` accordingly.

### 4. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/contact/submit
Submit a contact form with the following fields:
- `name` (required): Customer name
- `email` (required): Customer email
- `company` (optional): Company name
- `phone` (optional): Phone number
- `service` (optional): Service of interest
- `message` (required): Customer message

### GET /api/contact/test
Test endpoint to verify API and email configuration.

### GET /health
Health check endpoint.

## Email Templates

The system sends two professional emails:

1. **User Confirmation**: Branded confirmation email to the customer
2. **Company Notification**: Detailed notification to your team with quick action buttons

## Security Features

- Rate limiting (10 requests per hour per IP)
- Input validation and sanitization
- Spam detection and prevention
- CORS protection
- Security headers via Helmet

## Error Handling

Comprehensive error handling with:
- Detailed validation error messages
- Graceful email failure handling
- Request logging and monitoring
- Development vs. production error responses

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a production email service
3. Configure proper domain for `FRONTEND_URL`
4. Set up monitoring and logging
5. Consider using a process manager like PM2

## Monitoring

The server logs all submissions and email sending results. Monitor these logs for:
- Successful submissions
- Email delivery status
- Potential spam attempts
- Error patterns

## Support

For technical support or customization needs, contact the Webbeezwork development team.
