const express = require('express');
const { validateContactForm } = require('../middleware/validation');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

// POST /api/contact/submit
router.post('/submit', validateContactForm, submitContactForm);

// GET /api/contact/test (for testing email configuration)
router.get('/test', (req, res) => {
  res.json({ 
    message: 'Contact API is working',
    emailConfigured: !!process.env.EMAIL_USER
  });
});

module.exports = router;
