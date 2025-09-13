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
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Thank You - Webbeezwork Digital Marketing</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f8f9fa; }
        .email-container { max-width: 650px; margin: 20px auto; background: white; box-shadow: 0 10px 40px rgba(0,0,0,0.1); border-radius: 16px; overflow: hidden; }
        
        /* Header with premium yellow gradient */
        .header { 
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);
          color: #1a1a1a; 
          padding: 40px 30px; 
          text-align: center; 
          position: relative;
          overflow: hidden;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>') repeat;
          opacity: 0.3;
        }
        .header-content { position: relative; z-index: 2; }
        .logo { 
          max-width: 180px; 
          height: auto; 
          margin-bottom: 25px; 
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .header h1 { 
          font-size: 32px; 
          font-weight: 700; 
          margin-bottom: 12px; 
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header p { 
          font-size: 18px; 
          font-weight: 400; 
          opacity: 0.9;
        }
        
        /* Content area */
        .content { 
          background: white; 
          padding: 40px 35px; 
        }
        .content h2 { 
          color: #1a1a1a; 
          font-size: 26px; 
          margin-bottom: 20px; 
          font-weight: 600;
        }
        .content p { 
          font-size: 16px; 
          line-height: 1.8; 
          margin-bottom: 20px; 
          color: #555;
        }
        
        /* Highlight box */
        .highlight { 
          background: linear-gradient(145deg, #fffbf0, #fef7e0); 
          padding: 25px; 
          border-radius: 12px; 
          margin: 25px 0; 
          border-left: 5px solid #FFD700; 
          box-shadow: 0 4px 15px rgba(255,215,0,0.1);
        }
        .highlight h3 { 
          color: #1a1a1a; 
          font-size: 20px; 
          margin-bottom: 15px; 
          font-weight: 600;
        }
        .highlight p { 
          margin-bottom: 8px; 
          font-size: 15px;
        }
        .highlight strong { 
          color: #FF8C00; 
          font-weight: 600;
        }
        
        /* What's next section */
        .next-steps { 
          background: #f8f9fa; 
          padding: 25px; 
          border-radius: 12px; 
          margin: 25px 0;
        }
        .next-steps h3 { 
          color: #1a1a1a; 
          font-size: 20px; 
          margin-bottom: 15px; 
          font-weight: 600;
        }
        .next-steps ul { 
          list-style: none; 
          padding: 0;
        }
        .next-steps li { 
          padding: 8px 0; 
          padding-left: 25px; 
          position: relative; 
          font-size: 15px; 
          color: #555;
        }
        .next-steps li::before { 
          content: '✓'; 
          position: absolute; 
          left: 0; 
          color: #FFD700; 
          font-weight: bold; 
          font-size: 16px;
        }
        
        /* Premium button */
        .button { 
          display: inline-block; 
          background: linear-gradient(135deg, #FFD700, #FF8C00); 
          color: #1a1a1a; 
          padding: 16px 32px; 
          text-decoration: none; 
          border-radius: 8px; 
          margin: 25px 0; 
          font-weight: 600; 
          font-size: 16px;
          box-shadow: 0 6px 20px rgba(255,140,0,0.3);
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .button:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 8px 25px rgba(255,140,0,0.4);
        }
        
        /* Contact footer */
        .contact-footer { 
          background: linear-gradient(135deg, #2c3e50, #34495e); 
          color: white; 
          padding: 30px; 
          text-align: center;
        }
        .contact-footer h4 { 
          font-size: 20px; 
          margin-bottom: 20px; 
          color: #FFD700;
        }
        .contact-info { 
          display: flex; 
          justify-content: center; 
          flex-wrap: wrap; 
          gap: 20px; 
          margin-bottom: 20px;
        }
        .contact-item { 
          display: flex; 
          align-items: center; 
          gap: 8px; 
          font-size: 14px;
        }
        .contact-item .icon { 
          background: #FFD700; 
          color: #1a1a1a; 
          width: 24px; 
          height: 24px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 12px; 
          font-weight: bold;
        }
        
        /* Social links */
        .social-links { 
          margin-top: 20px;
        }
        .social-links p { 
          color: #FFD700; 
          margin-bottom: 10px; 
          font-weight: 600;
        }
        .social-links a { 
          color: white; 
          text-decoration: none; 
          margin: 0 10px; 
          font-size: 14px;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
        .social-links a:hover { 
          opacity: 1; 
          color: #FFD700;
        }
        
        /* Company footer */
        .company-footer { 
          background: #1a1a1a; 
          color: #ccc; 
          padding: 25px; 
          text-align: center; 
          font-size: 14px;
        }
        .company-footer strong { 
          color: #FFD700;
        }
        .company-footer .tagline { 
          font-style: italic; 
          margin: 10px 0; 
          font-size: 16px;
        }
        .company-footer .disclaimer { 
          font-size: 12px; 
          opacity: 0.7; 
          margin-top: 15px; 
          line-height: 1.4;
        }
        
        /* Responsive design */
        @media (max-width: 600px) {
          .email-container { margin: 10px; }
          .header { padding: 25px 20px; }
          .content { padding: 25px 20px; }
          .contact-footer { padding: 20px; }
          .contact-info { flex-direction: column; align-items: center; }
          .header h1 { font-size: 24px; }
          .header p { font-size: 16px; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <img src="${logoUrl}" alt="Webbeezwork Digital Marketing Logo" class="logo">
            <h1>🎉 Thank You for Reaching Out!</h1>
            <p>Your inquiry has been received and we're excited to help grow your business</p>
          </div>
        </div>
        
        <div class="content">
          <h2>Hello ${name}! 👋</h2>
          
          <p>Thank you for contacting <strong>Webbeezwork Webbeezwork Digital Marketing Agency</strong>. We're thrilled that you're considering us to help amplify your digital presence and drive meaningful results for your business.</p>
          
          <div class="highlight">
            <h3>📋 Your Inquiry Summary</h3>
            <p><strong>Service of Interest:</strong> ${service || 'General Consultation'}</p>
            <p><strong>Company:</strong> ${company || 'Individual/Startup'}</p>
            <p><strong>Reference ID:</strong> ${submissionId}</p>
            <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="next-steps">
            <h3>🚀 What Happens Next</h3>
            <ul>
              <li>Our expert team will review your inquiry within 24 hours</li>
              <li>We'll schedule a personalized consultation to understand your goals</li>
              <li>You'll receive a customized digital marketing strategy proposal</li>
              <li>Together, we'll create a roadmap to accelerate your business growth</li>
            </ul>
          </div>
          
          <p>While you wait, feel free to explore our case studies and learn how we've helped businesses like yours achieve remarkable growth in the digital space.</p>
          
          <a href="${process.env.WEBSITE_URL || 'https://webbeezwork.com'}" class="button">Explore Our Work</a>
        </div>
        
        <div class="contact-footer">
          <h4>📞 Ready to Connect?</h4>
          <div class="contact-info">
            <div class="contact-item">
              <span class="icon">✉</span>
              <span>webbeezworkagency@gmail.com</span>
            </div>
            <div class="contact-item">
              <span class="icon">📱</span>
              <span>+233 XX XXX XXXX</span>
            </div>
            <div class="contact-item">
              <span class="icon">🌐</span>
              <span>www.webbeezwork.com</span>
            </div>
          </div>
          
          <div class="social-links">
            <p>Follow Our Journey</p>
            <a href="#">LinkedIn</a> • <a href="#">Twitter</a> • <a href="#">Facebook</a> • <a href="#">Instagram</a>
          </div>
        </div>
        
        <div class="company-footer">
          <p><strong>Webbeezwork Webbeezwork Digital Marketing Agency</strong></p>
          <p class="tagline">Tailored Strategies. Measurable Results. Your Success, Amplified.</p>
          <p class="disclaimer">This email was sent because you submitted an inquiry through our website. If you didn't make this request, please disregard this message. We respect your privacy and never share your information with third parties.</p>
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

Thank you for reaching out to Webbeezwork Webbeezwork Digital Marketing Agency. We've successfully received your message and will respond shortly.

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
Webbeezwork Webbeezwork Digital Marketing Agency
Tailored strategies. Measurable results. Your success, amplified.

This email was sent because you submitted a contact form on our website.
  `;
};

// Company notification email template
const generateCompanyNotificationTemplate = ({ name, email, company, phone, service, message, timestamp, ip }) => {
  const logoUrl = process.env.WEBSITE_URL ? `${process.env.WEBSITE_URL}/webbeezwork-logo.webp` : '/webbeezwork-logo.webp';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>🚨 New Lead Alert - Webbeezwork</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f5f6fa; }
        .email-container { max-width: 700px; margin: 20px auto; background: white; box-shadow: 0 15px 50px rgba(0,0,0,0.1); border-radius: 20px; overflow: hidden; }
        
        /* Alert header with premium yellow gradient */
        .header { 
          background: linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #FF6B35 100%);
          color: #1a1a1a; 
          padding: 30px; 
          text-align: center; 
          position: relative;
          overflow: hidden;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><polygon points="20 0 40 20 20 40 0 20"/></g></svg>') repeat;
          opacity: 0.2;
        }
        .header-content { position: relative; z-index: 2; }
        .logo { 
          max-width: 140px; 
          height: auto; 
          margin-bottom: 20px; 
          border-radius: 10px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.2);
        }
        .header h1 { 
          font-size: 28px; 
          font-weight: 700; 
          margin-bottom: 10px; 
          text-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .header p { 
          font-size: 16px; 
          font-weight: 500; 
          opacity: 0.9;
        }
        .priority-badge {
          display: inline-block;
          background: rgba(255,255,255,0.9);
          color: #FF6B35;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        /* Content area */
        .content { 
          background: white; 
          padding: 35px; 
        }
        
        /* Client info card */
        .client-card { 
          background: linear-gradient(145deg, #fff8e1, #fff3c4); 
          padding: 25px; 
          border-radius: 15px; 
          margin: 20px 0; 
          border-left: 6px solid #FFD700; 
          box-shadow: 0 8px 30px rgba(255,215,0,0.15);
          position: relative;
        }
        .client-card::before {
          content: '👤';
          position: absolute;
          top: -10px;
          right: 20px;
          font-size: 24px;
          background: #FFD700;
          padding: 8px 12px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(255,215,0,0.3);
        }
        .client-card h3 { 
          color: #1a1a1a; 
          font-size: 20px; 
          margin-bottom: 20px; 
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
        }
        .info-label {
          font-weight: 600;
          color: #FF8C00;
          min-width: 80px;
          font-size: 14px;
        }
        .info-value {
          color: #333;
          font-size: 15px;
        }
        .info-value a {
          color: #FF6B35;
          text-decoration: none;
          font-weight: 500;
        }
        .info-value a:hover {
          text-decoration: underline;
        }
        .service-tag {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          color: #1a1a1a;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          display: inline-block;
        }
        
        /* Message box */
        .message-card { 
          background: linear-gradient(145deg, #f0f7ff, #e3f2fd); 
          padding: 25px; 
          border-radius: 15px; 
          margin: 20px 0; 
          border-left: 6px solid #2196F3; 
          box-shadow: 0 8px 30px rgba(33,150,243,0.15);
          position: relative;
        }
        .message-card::before {
          content: '💬';
          position: absolute;
          top: -10px;
          right: 20px;
          font-size: 24px;
          background: #2196F3;
          padding: 8px 12px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(33,150,243,0.3);
        }
        .message-card h3 { 
          color: #1a1a1a; 
          font-size: 20px; 
          margin-bottom: 15px; 
          font-weight: 600;
        }
        .message-text { 
          font-style: italic; 
          line-height: 1.8; 
          color: #444; 
          font-size: 16px;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
          border-left: 4px solid #2196F3;
        }
        
        /* Action buttons */
        .actions { 
          text-align: center; 
          margin: 30px 0; 
          padding: 25px;
          background: #f8f9fa;
          border-radius: 15px;
        }
        .actions h3 {
          margin-bottom: 20px;
          color: #1a1a1a;
          font-size: 18px;
        }
        .button { 
          display: inline-block; 
          padding: 14px 28px; 
          margin: 8px; 
          text-decoration: none; 
          border-radius: 8px; 
          font-weight: 600; 
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .btn-reply { 
          background: linear-gradient(135deg, #4CAF50, #45a049); 
          color: white; 
        }
        .btn-reply:hover { 
          transform: translateY(-3px); 
          box-shadow: 0 8px 25px rgba(76,175,80,0.4);
        }
        .btn-call { 
          background: linear-gradient(135deg, #FFD700, #FF8C00); 
          color: #1a1a1a; 
        }
        .btn-call:hover { 
          transform: translateY(-3px); 
          box-shadow: 0 8px 25px rgba(255,140,0,0.4);
        }
        
        /* Metadata */
        .metadata { 
          background: #2c3e50; 
          color: #ecf0f1; 
          padding: 20px; 
          border-radius: 10px; 
          font-size: 12px; 
          margin-top: 20px;
        }
        .metadata h4 { 
          color: #FFD700; 
          margin-bottom: 10px; 
          font-size: 14px;
        }
        .metadata p { 
          margin: 5px 0; 
          opacity: 0.9;
        }
        
        /* Footer */
        .system-footer { 
          background: #1a1a1a; 
          color: #bbb; 
          padding: 20px; 
          text-align: center; 
          font-size: 13px;
        }
        .system-footer strong { 
          color: #FFD700;
        }
        .system-footer .timestamp {
          font-size: 11px;
          opacity: 0.7;
          margin-top: 8px;
        }
        
        /* Responsive design */
        @media (max-width: 600px) {
          .email-container { margin: 10px; }
          .header, .content { padding: 20px; }
          .info-grid { grid-template-columns: 1fr; }
          .actions { padding: 20px; }
          .button { display: block; margin: 10px 0; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <img src="${logoUrl}" alt="Webbeezwork Digital Marketing Logo" class="logo">
            <h1>🚨 New Lead Alert!</h1>
            <p>A potential client has submitted an inquiry through your website</p>
            <span class="priority-badge">High Priority</span>
          </div>
        </div>
        
        <div class="content">
          <div class="client-card">
            <h3>Client Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value"><strong>${name}</strong></span>
              </div>
              <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-item">
                <span class="info-label">Company:</span>
                <span class="info-value">${company || 'Individual/Startup'}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Phone:</span>
                <span class="info-value">
                  ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}
                </span>
              </div>
              <div class="info-item">
                <span class="info-label">Service:</span>
                <span class="info-value">
                  <span class="service-tag">${service || 'General Consultation'}</span>
                </span>
              </div>
              <div class="info-item">
                <span class="info-label">Submitted:</span>
                <span class="info-value">${timestamp || new Date().toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div class="message-card">
            <h3>Client Message</h3>
            <div class="message-text">
              "${message}"
            </div>
          </div>
          
          <div class="actions">
            <h3>🎯 Quick Actions</h3>
            <a href="mailto:${email}?subject=Re: Your ${service || 'Business'} Inquiry - Let's Amplify Your Success!&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in our ${service || 'digital marketing services'}. I'm excited to discuss how Webbeezwork can help accelerate your business growth.%0D%0A%0D%0AWhen would be a good time for a brief consultation call?%0D%0A%0D%0ABest regards,%0D%0AWebbeezwork Team" class="button btn-reply">📧 Reply to ${name}</a>
            ${phone ? `<a href="tel:${phone}" class="button btn-call">📞 Call Now</a>` : ''}
          </div>
          
          <div class="metadata">
            <h4>📊 Technical Information</h4>
            <p><strong>IP Address:</strong> ${ip || 'Unknown'}</p>
            <p><strong>Submission Time:</strong> ${timestamp || new Date().toISOString()}</p>
            <p><strong>Lead Source:</strong> Website Contact Form</p>
            <p><strong>Lead Quality:</strong> Direct Inquiry (High Intent)</p>
          </div>
        </div>
        
        <div class="system-footer">
          <p><strong>Webbeezwork CRM System</strong> - Lead Management</p>
          <p class="timestamp">This notification was automatically generated on ${new Date().toLocaleString()}</p>
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
