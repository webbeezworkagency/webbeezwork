const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: process.env.MAX_REQUESTS_PER_HOUR || 10,
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '1 hour'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/contact', limiter);

// Enhanced CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:8080',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:8080',
      'http://127.0.0.1:3000',
      'https://webbeezwork-pearl.vercel.app',
      'https://webbeezwork.vercel.app',
      process.env.FRONTEND_URL_LOCAL,
      process.env.FRONTEND_URL_PRODUCTION
    ].filter(Boolean); // Remove any undefined values
    
    console.log('🌐 CORS Check - Request Origin:', origin);
    console.log('🌐 CORS Check - Allowed Origins:', allowedOrigins);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('✅ CORS - Origin allowed');
      callback(null, true);
    } else {
      console.log('❌ CORS - Origin blocked');
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Accept',
    'Accept-Language', 
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Origin',
    'Referer',
    'User-Agent'
  ],
  exposedHeaders: ['X-Total-Count', 'X-Request-ID']
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Additional CORS headers middleware (backup)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:8080',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:8080',
    'http://127.0.0.1:3000',
    'https://webbeezwork-pearl.vercel.app',
    'https://webbeezwork.vercel.app',
    process.env.FRONTEND_URL_LOCAL,
    process.env.FRONTEND_URL_PRODUCTION
  ].filter(Boolean);

  console.log('🔧 Manual CORS Middleware - Origin:', origin);
  
  if (!origin || allowedOrigins.includes(origin)) {
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Accept, Accept-Language, Content-Type, Authorization, X-Requested-With, Origin, Referer, User-Agent');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
    
    console.log('✅ Manual CORS headers set for origin:', origin);
  } else {
    console.log('❌ Manual CORS blocked for origin:', origin);
  }
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    console.log('🔧 Handling OPTIONS preflight request');
    res.status(200).end();
    return;
  }
  
  next();
});

// Handle preflight requests
app.options('*', cors(corsOptions));

// Body parsing middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip;
  const userAgent = req.get('User-Agent');
  const origin = req.get('Origin');
  
  console.log(`\n🌐 === INCOMING REQUEST ===`);
  console.log(`⏰ ${timestamp}`);
  console.log(`📍 ${method} ${url}`);
  console.log(`🌐 IP: ${ip}`);
  console.log(`🌐 Origin: ${origin || 'No Origin'}`);
  console.log(`📱 User-Agent: ${userAgent}`);
  
  if (method === 'POST' && req.body) {
    console.log(`📦 Body size: ${JSON.stringify(req.body).length} characters`);
  }
  
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('💚 Health check requested');
  res.status(200).json({ 
    status: 'OK', 
    message: 'Webbeezwork Backend is running',
    timestamp: new Date().toISOString(),
    cors: 'enabled'
  });
});

// Root route - API info
app.get('/', (req, res) => {
  console.log('🏠 Root route accessed');
  res.json({
    name: 'Webbeezwork Backend API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      contact: '/api/contact/submit'
    },
    documentation: 'Visit /health for server health status'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('🏥 Health check accessed');
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    services: {
      email: process.env.EMAIL_USER ? 'configured' : 'not configured',
      cors: 'enabled',
      rateLimit: 'enabled'
    }
  });
});

// API routes
app.use('/api/contact', contactRoutes);

// 404 handler
app.use('*', (req, res) => {
  console.log(`❌ 404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ 
    error: 'Route not found',
    message: 'The requested endpoint does not exist',
    path: req.originalUrl
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('💥 Server Error:', err.message);
  console.error('🔥 Stack:', err.stack);
  
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});

app.listen(PORT, () => {
  console.log('\n🚀 ===== SERVER STARTUP =====');
  console.log(`🚀 Webbeezwork Backend running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`📧 Email service configured for ${process.env.EMAIL_USER}`);
  console.log(`🔗 CORS enabled for multiple origins:`);
  console.log(`   📱 Local: ${process.env.FRONTEND_URL_LOCAL}`);
  console.log(`   🌍 Production: ${process.env.FRONTEND_URL_PRODUCTION}`);
  console.log(`🛡️ Rate limiting: ${process.env.MAX_REQUESTS_PER_HOUR || 10} requests/hour`);
  console.log('===============================\n');
});
