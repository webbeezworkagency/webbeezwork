const nodemailer = require('nodemailer');

// Email service for Webbeezwork contact form - Updated 2025-09-13
// Create email transporter
const createTransporter = () => {
  const config = {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  return nodemailer.createTransport(config);
};

// Send confirmation email to user
const sendUserConfirmationEmail = async (userData) => {
  console.log(`\n📧 === USER CONFIRMATION EMAIL ===`);
  console.log(`📧 Preparing to send confirmation email...`);
  
  try {
    const transporter = createTransporter();
    const { name, email, company, service, submissionId } = userData;

    console.log(`👤 Recipient: ${name} <${email}>`);
    console.log(`🏢 Company: ${company || 'Not provided'}`);
    console.log(`🛠️ Service: ${service || 'General inquiry'}`);
    console.log(`📋 Submission ID: ${submissionId}`);

    const mailOptions = {
      from: {
        name: process.env.COMPANY_NAME || 'Webbeezwork',
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: 'Thank you for contacting Webbeezwork - We\'ve received your inquiry!',
      html: generateUserConfirmationTemplate({ name, company, service, submissionId }),
      text: generateUserConfirmationText({ name, company, service, submissionId })
    };

    console.log(`📧 From: ${mailOptions.from.name} <${mailOptions.from.address}>`);
    console.log(`📧 To: ${mailOptions.to}`);
    console.log(`📧 Subject: ${mailOptions.subject}`);
    console.log(`🔄 Sending email via ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}...`);

    const result = await transporter.sendMail(mailOptions);
    
    console.log('✅ User confirmation email sent successfully!');
    console.log(`📧 Message ID: ${result.messageId}`);
    console.log(`📧 Response: ${result.response || 'No response'}`);
    
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.log('❌ Failed to send user confirmation email!');
    console.log(`🔥 Error Type: ${error.name || 'Unknown'}`);
    console.log(`🔥 Error Code: ${error.code || 'Unknown'}`);
    console.log(`🔥 Error Message: ${error.message}`);
    console.log(`🔥 Error Stack: ${error.stack}`);
    
    return { success: false, error: error.message };
  }
};

// Send notification email to company
const sendCompanyNotificationEmail = async (formData) => {
  console.log(`\n📧 === COMPANY NOTIFICATION EMAIL ===`);
  console.log(`📧 Preparing to send company notification...`);
  
  try {
    const transporter = createTransporter();
    const { name, email, company, phone, service, message, timestamp, ip, userAgent, submissionId } = formData;

    console.log(`👤 Customer: ${name} <${email}>`);
    console.log(`🏢 Company: ${company || 'Not provided'}`);
    console.log(`📞 Phone: ${phone || 'Not provided'}`);
    console.log(`🛠️ Service: ${service || 'General inquiry'}`);
    console.log(`💬 Message Length: ${message?.length || 0} characters`);
    console.log(`⏰ Submitted at: ${timestamp}`);
    console.log(`🌐 IP: ${ip}`);
    console.log(`📋 Submission ID: ${submissionId}`);

    const companyEmail = process.env.COMPANY_EMAIL || process.env.EMAIL_USER;
    
    const mailOptions = {
      from: {
        name: 'Webbeezwork Contact Form',
        address: process.env.EMAIL_USER
      },
      to: companyEmail,
      subject: `🚀 New Contact Form Submission - ${service || 'General Inquiry'} [${submissionId}]`,
      html: generateCompanyNotificationTemplate(formData),
      text: generateCompanyNotificationText(formData),
      replyTo: email
    };

    console.log(`📧 From: ${mailOptions.from.name} <${mailOptions.from.address}>`);
    console.log(`📧 To: ${mailOptions.to}`);
    console.log(`📧 Reply-To: ${mailOptions.replyTo}`);
    console.log(`📧 Subject: ${mailOptions.subject}`);
    console.log(`🔄 Sending company notification via ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}...`);

    const result = await transporter.sendMail(mailOptions);
    
    console.log('✅ Company notification email sent successfully!');
    console.log(`📧 Message ID: ${result.messageId}`);
    console.log(`📧 Response: ${result.response || 'No response'}`);
    
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.log('❌ Failed to send company notification email!');
    console.log(`🔥 Error Type: ${error.name || 'Unknown'}`);
    console.log(`🔥 Error Code: ${error.code || 'Unknown'}`);
    console.log(`🔥 Error Message: ${error.message}`);
    console.log(`🔥 Error Stack: ${error.stack}`);
    
    return { success: false, error: error.message };
  }
};

// User confirmation email template
const generateUserConfirmationTemplate = ({ name, company, service, submissionId }) => {
  const logoUrl = process.env.WEBSITE_URL ? `${process.env.WEBSITE_URL}/webbeezwork-logo.webp` : '/webbeezwork-logo.webp';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Webbeezwork</title>
      <style>
        .email-container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .logo { max-width: 150px; height: auto; margin-bottom: 20px; }
        .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
        .highlight { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #666; }
        .social-links a { color: #667eea; text-decoration: none; margin: 0 5px; }
        .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="${logoUrl}" alt="Webbeezwork Logo" class="logo">
          <h1>Thank You for Your Inquiry!</h1>
          <p>We've successfully received your message and will respond shortly.</p>
        </div>
        
        <div class="content">
          <h2>Hi ${name}! 👋</h2>
          
          <p>Thank you for reaching out to <strong>Webbeezwork Digital Marketing Agency</strong>. We're thrilled to learn about your business and explore how we can help you achieve your digital marketing goals.</p>
          
          <div class="highlight">
            <h3>📋 Your Submission Details:</h3>
            <p><strong>Service Interest:</strong> ${service || 'General inquiry'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Reference ID:</strong> ${submissionId}</p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <h3>🚀 What happens next?</h3>
          <ul>
            <li>Our team will review your inquiry within 24 hours</li>
            <li>We'll reach out to discuss your specific needs and goals</li>
            <li>We'll provide you with a customized strategy proposal</li>
            <li>Together, we'll create a plan to amplify your digital presence</li>
          </ul>
          
          <p>In the meantime, feel free to explore our website to learn more about our services and success stories.</p>
          
          <a href="${process.env.WEBSITE_URL || 'https://webbeezwork.com'}" class="button">Visit Our Website</a>
        </div>
        
        <div class="footer">
          <h4>📞 Get in touch:</h4>
          <ul style="list-style: none; padding: 0; margin: 10px 0;">
            <li>📧 Email: webbeezworkagency@gmail.com</li>
            <li>📱 Phone: +233 XX XXX XXXX</li>
            <li>🌐 Website: www.webbeezwork.com</li>
          </ul>
          
          <div class="social-links">
            <p><strong>Connect with us:</strong></p>
            <a href="#">LinkedIn</a> | <a href="#">Twitter</a> | <a href="#">Facebook</a> | <a href="#">Instagram</a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Webbeezwork Digital Marketing Agency</strong></p>
          <p>Tailored strategies. Measurable results. Your success, amplified.</p>
          <p style="margin-top: 15px; font-size: 12px;">This email was sent because you submitted a contact form on our website. If you didn't make this request, please ignore this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Plain text version for user confirmation
const generateUserConfirmationText = ({ name, company, service, submissionId }) => {
  return `
Hi ${name}!

Thank you for reaching out to Webbeezwork Digital Marketing Agency. We've successfully received your message and will respond shortly.

Your Submission Details:
- Service Interest: ${service || 'General inquiry'}
- Company: ${company || 'Not provided'}
- Reference ID: ${submissionId}
- Submission Time: ${new Date().toLocaleString()}

What happens next?
1. Our team will review your inquiry within 24 hours
2. We'll reach out to discuss your specific needs and goals
3. We'll provide you with a customized strategy proposal
4. Together, we'll create a plan to amplify your digital presence

Get in touch:
Email: webbeezworkagency@gmail.com
Phone: +233 XX XXX XXXX
Website: www.webbeezwork.com

Connect with us on LinkedIn, Twitter, Facebook, and Instagram.

---
Webbeezwork Digital Marketing Agency
Tailored strategies. Measurable results. Your success, amplified.

This email was sent because you submitted a contact form on our website.
  `;
};

// Company notification email template
const generateCompanyNotificationTemplate = ({ name, email, company, phone, service, message, timestamp, ip }) => {
  const logoUrl = process.env.WEBSITE_URL ? `${process.env.WEBSITE_URL}/webbeezwork-logo.webp` : '/webbeezwork-logo.webp';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Webbeezwork</title>
      <style>
        .email-container { max-width: 650px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; }
        .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 25px; text-align: center; }
        .logo { max-width: 120px; height: auto; margin-bottom: 15px; }
        .content { background: white; padding: 25px; border: 1px solid #e1e5e9; }
        .client-info { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0; }
        .message-box { background: #e3f2fd; padding: 20px; border-radius: 8px; border-left: 4px solid #2196f3; margin: 15px 0; }
        .actions { text-align: center; margin: 25px 0; }
        .button { display: inline-block; padding: 12px 20px; margin: 5px; text-decoration: none; border-radius: 5px; font-weight: bold; }
        .btn-reply { background: #4CAF50; color: white; }
        .btn-call { background: #ff9800; color: white; }
        .footer { background: #f1f3f4; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .metadata { font-size: 11px; color: #888; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="${logoUrl}" alt="Webbeezwork Logo" class="logo">
          <h2>🚀 New Contact Form Submission</h2>
          <p>A potential client is interested in your services!</p>
        </div>
        
        <div class="content">
          <div class="client-info">
            <h3>👤 Client Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</p>
            <p><strong>Service Interest:</strong> <span style="background: #e8f5e8; padding: 2px 8px; border-radius: 4px;">${service || 'General inquiry'}</span></p>
            <p><strong>Submitted:</strong> ${timestamp || new Date().toLocaleString()}</p>
          </div>
          
          <div class="message-box">
            <h3>💬 Client Message</h3>
            <p style="font-style: italic; line-height: 1.6;">"${message}"</p>
          </div>
          
          <div class="actions">
            <a href="mailto:${email}?subject=Re: Your inquiry about ${service || 'our services'}&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in ${service || 'our services'}. " class="button btn-reply">📧 Reply via Email</a>
            ${phone ? `<a href="tel:${phone}" class="button btn-call">📞 Call ${name}</a>` : ''}
          </div>
          
          <div class="metadata">
            <p><strong>Technical Details:</strong></p>
            <p>IP Address: ${ip || 'Unknown'} | Submitted at: ${timestamp || new Date().toISOString()}</p>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Webbeezwork Contact Form System</strong></p>
          <p>This notification was automatically generated from your website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Plain text version for company notification
const generateCompanyNotificationText = ({ name, email, company, phone, service, message, timestamp, ip }) => {
  return `
🚀 NEW CONTACT FORM SUBMISSION - WEBBEEZWORK

Client Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Phone: ${phone || 'Not provided'}
- Service Interest: ${service || 'General inquiry'}
- Submitted: ${timestamp || new Date().toLocaleString()}

Client Message:
"${message}"

Quick Actions:
- Reply: mailto:${email}
${phone ? `- Call: ${phone}` : ''}

Technical Details:
- IP Address: ${ip || 'Unknown'}
- Timestamp: ${timestamp || new Date().toISOString()}

---
This notification was automatically generated from your website contact form.
  `;
};

module.exports = {
  sendUserConfirmationEmail,
  sendCompanyNotificationEmail
};
