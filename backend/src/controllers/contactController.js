const { sendUserConfirmationEmail, sendCompanyNotificationEmail } = require('../services/emailService');

const submitContactForm = async (req, res) => {
  const submissionId = Date.now() + Math.random().toString(36).substr(2, 9);
  const timestamp = new Date().toISOString();
  
  console.log('\n🚀 ===== NEW CONTACT FORM SUBMISSION =====');
  console.log(`📋 Submission ID: ${submissionId}`);
  console.log(`⏰ Timestamp: ${timestamp}`);
  console.log(`🌐 IP Address: ${req.ip}`);
  console.log(`📍 User Agent: ${req.get('User-Agent')}`);
  
  try {
    const { name, email, company, phone, service, message } = req.body;
    
    // Log the submission details
    console.log('\n📝 === FORM DATA ===');
    console.log(`� Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`🏢 Company: ${company || 'Not provided'}`);
    console.log(`📞 Phone: ${phone || 'Not provided'}`);
    console.log(`🛠️ Service: ${service || 'Not specified'}`);
    console.log(`💬 Message Length: ${message?.length || 0} characters`);
    console.log(`💬 Message Preview: ${message?.substring(0, 100)}${message?.length > 100 ? '...' : ''}`);

    console.log('\n📧 === EMAIL PROCESSING ===');
    console.log('🔄 Starting email sending process...');

    // Send confirmation email to user
    console.log(`📨 Sending confirmation email to user: ${email}`);
    const userEmailResult = await sendUserConfirmationEmail({
      name,
      email,
      company,
      service,
      submissionId
    });

    if (userEmailResult.success) {
      console.log(`✅ User confirmation email sent successfully`);
      console.log(`📧 Message ID: ${userEmailResult.messageId}`);
    } else {
      console.log(`❌ User confirmation email failed:`);
      console.log(`🔥 Error: ${userEmailResult.error}`);
    }

    // Send notification email to company
    console.log(`📨 Sending notification email to company: ${process.env.COMPANY_EMAIL || process.env.EMAIL_USER}`);
    const companyEmailResult = await sendCompanyNotificationEmail({
      name,
      email,
      company,
      phone,
      service,
      message,
      timestamp,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      submissionId
    });

    if (companyEmailResult.success) {
      console.log(`✅ Company notification email sent successfully`);
      console.log(`📧 Message ID: ${companyEmailResult.messageId}`);
    } else {
      console.log(`❌ Company notification email failed:`);
      console.log(`🔥 Error: ${companyEmailResult.error}`);
    }

    console.log('\n📊 === SUBMISSION SUMMARY ===');
    console.log(`👤 Customer: ${name} (${email})`);
    console.log(`📧 User Email: ${userEmailResult.success ? '✅ Sent' : '❌ Failed'}`);
    console.log(`📧 Company Email: ${companyEmailResult.success ? '✅ Sent' : '❌ Failed'}`);

    // Check if both emails were sent successfully
    if (userEmailResult.success && companyEmailResult.success) {
      console.log(`🎉 SUBMISSION COMPLETED SUCCESSFULLY!`);
      console.log(`📋 Submission ID: ${submissionId}`);
      console.log('================================================\n');
      
      res.status(200).json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: {
          userEmailSent: true,
          companyNotified: true,
          submissionId
        }
      });
    } else {
      // Partial success - log the issue but still respond positively to user
      console.log(`⚠️ PARTIAL SUCCESS - Some emails failed`);
      console.log(`📧 User Email: ${userEmailResult.success ? 'Success' : 'Failed'}`);
      console.log(`📧 Company Email: ${companyEmailResult.success ? 'Success' : 'Failed'}`);
      console.log(`🔥 User Email Error: ${userEmailResult.error || 'None'}`);
      console.log(`🔥 Company Email Error: ${companyEmailResult.error || 'None'}`);
      console.log('================================================\n');

      res.status(200).json({
        success: true,
        message: 'Thank you for your message! We have received your inquiry.',
        data: {
          userEmailSent: userEmailResult.success,
          companyNotified: companyEmailResult.success,
          submissionId
        }
      });
    }

  } catch (error) {
    console.log(`\n💥 === SUBMISSION ERROR ===`);
    console.log(`📋 Submission ID: ${submissionId}`);
    console.log(`🔥 Error Type: ${error.name || 'Unknown'}`);
    console.log(`🔥 Error Message: ${error.message}`);
    console.log(`🔥 Error Stack: ${error.stack}`);
    console.log('================================================\n');
    
    res.status(500).json({
      success: false,
      error: 'We encountered an issue processing your request. Please try again or contact us directly.',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined,
      submissionId
    });
  }
};

module.exports = {
  submitContactForm
};
