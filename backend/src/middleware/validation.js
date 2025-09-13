const Joi = require('joi');

// Validation schema for contact form
const contactFormSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .trim()
    .pattern(/^[a-zA-Z\s'-]+$/)
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 100 characters',
      'string.pattern.base': 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required()
    .trim()
    .lowercase()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please provide a valid email address'
    }),

  company: Joi.string()
    .max(100)
    .trim()
    .allow('')
    .messages({
      'string.max': 'Company name cannot exceed 100 characters'
    }),

  phone: Joi.string()
    .pattern(/^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,15}$/)
    .allow('')
    .trim()
    .messages({
      'string.pattern.base': 'Please provide a valid phone number'
    }),

  service: Joi.string()
    .valid(
      'UI/UX Design',
      'Web Development',
      'SEO Optimization',
      'Digital Marketing',
      'Brand Strategy',
      'Content Creation',
      'Social Media Management',
      'PPC Advertising',
      'Analytics & Reporting',
      'Consultation',
      'Other'
    )
    .allow('')
    .messages({
      'any.only': 'Please select a valid service'
    }),

  message: Joi.string()
    .min(10)
    .max(2000)
    .required()
    .trim()
    .messages({
      'string.empty': 'Message is required',
      'string.min': 'Message must be at least 10 characters long',
      'string.max': 'Message cannot exceed 2000 characters'
    })
});

// Middleware function to validate contact form data
const validateContactForm = (req, res, next) => {
  console.log('\n🔍 === FORM VALIDATION ===');
  console.log(`🌐 Request from IP: ${req.ip}`);
  console.log(`📝 Raw form data received:`, JSON.stringify(req.body, null, 2));
  
  const { error, value } = contactFormSchema.validate(req.body, {
    abortEarly: false, // Return all validation errors, not just the first one
    stripUnknown: true // Remove any fields not in the schema
  });

  if (error) {
    console.log('❌ Validation failed!');
    console.log(`🔥 Validation errors:`, error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message,
      value: detail.context?.value
    })));

    const validationErrors = error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message
    }));

    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: validationErrors,
      message: 'Please check your input and try again'
    });
  }

  console.log('✅ Validation passed!');
  console.log(`📝 Sanitized form data:`, JSON.stringify(value, null, 2));

  // If validation passes, replace req.body with the validated and sanitized data
  req.body = value;
  next();
};

// Additional security validations
const securityChecks = (req, res, next) => {
  console.log('\n🛡️ === SECURITY CHECKS ===');
  
  const { name, email, message, company } = req.body;
  
  // Check for potential spam patterns
  const spamKeywords = ['bitcoin', 'crypto', 'investment', 'lottery', 'winner', 'prize', 'urgent', 'click here'];
  const suspiciousPatterns = [
    /http[s]?:\/\//gi, // URLs in inappropriate fields
    /\b[A-Z]{3,}\b/g, // Excessive caps
    /(.)\1{4,}/g, // Repeated characters
  ];

  const fieldsToCheck = [name, message, company].filter(Boolean).join(' ').toLowerCase();
  console.log(`🔍 Checking content for spam patterns...`);
  console.log(`📝 Content to check: "${fieldsToCheck.substring(0, 100)}${fieldsToCheck.length > 100 ? '...' : ''}"`);

  // Check for spam keywords
  const hasSpamKeywords = spamKeywords.some(keyword => 
    fieldsToCheck.includes(keyword.toLowerCase())
  );

  // Check for suspicious patterns
  const hasSuspiciousPatterns = suspiciousPatterns.some(pattern => 
    pattern.test(fieldsToCheck)
  );

  console.log(`🔍 Spam keywords detected: ${hasSpamKeywords}`);
  console.log(`🔍 Suspicious patterns detected: ${hasSuspiciousPatterns}`);

  if (hasSpamKeywords || hasSuspiciousPatterns) {
    console.log('🚨 POTENTIAL SPAM DETECTED!');
    console.log(`🌐 IP: ${req.ip}`);
    console.log(`📧 Email: ${email}`);
    console.log(`🔥 Spam keywords: ${hasSpamKeywords}`);
    console.log(`🔥 Suspicious patterns: ${hasSuspiciousPatterns}`);
    console.log(`⏰ Timestamp: ${new Date().toISOString()}`);

    return res.status(400).json({
      success: false,
      error: 'Submission rejected',
      message: 'Your message appears to contain inappropriate content. Please revise and try again.'
    });
  }

  console.log('✅ Security checks passed!');
  next();
};

module.exports = {
  validateContactForm: [validateContactForm, securityChecks]
};
