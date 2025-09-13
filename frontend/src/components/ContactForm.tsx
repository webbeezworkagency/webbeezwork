import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { contactAPI, validateForm, handleApiError } from '@/services/api';
import type { ContactFormData, FormErrors, SubmissionState } from '@/types/contact';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Mail, 
  User, 
  Building, 
  Phone, 
  MessageSquare,
  Briefcase
} from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    success: false
  });

  const services = [
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
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(`📝 Field changed: ${name} = "${value.substring(0, 50)}${value.length > 50 ? '...' : ''}"`);
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      console.log(`🔄 Clearing error for field: ${name}`);
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateFormData = (): boolean => {
    console.log('🔍 Starting form validation...');
    const validation = validateForm(formData);
    
    console.log('📝 Validation result:', {
      isValid: validation.isValid,
      errors: validation.errors
    });
    
    if (!validation.isValid) {
      console.log('❌ Validation failed with errors:', validation.errors);
      const newErrors: FormErrors = {};
      validation.errors.forEach(error => {
        const [field] = error.split(':');
        newErrors[field.toLowerCase()] = error;
        console.log(`🔥 Field error - ${field}: ${error}`);
      });
      setErrors(newErrors);
    }
    
    return validation.isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('\n🚀 ===== FRONTEND FORM SUBMISSION =====');
    console.log('📋 Form data being submitted:', {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not selected',
      messageLength: formData.message.length,
      messagePreview: formData.message.substring(0, 100) + (formData.message.length > 100 ? '...' : '')
    });
    
    // Reset states
    setErrors({});
    setSubmissionState(prev => ({ ...prev, error: null }));
    
    // Validate form
    console.log('🔍 Validating form data...');
    if (!validateFormData()) {
      console.log('❌ Form validation failed');
      return;
    }
    console.log('✅ Form validation passed');
    
    setSubmissionState(prev => ({ ...prev, isSubmitting: true }));
    console.log('🔄 Starting API request...');
    
    try {
      const startTime = Date.now();
      console.log(`📡 Sending POST request to API...`);
      
      const response = await contactAPI.submit(formData);
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      console.log(`⏱️ API request completed in ${duration}ms`);
      console.log('📥 API Response received:', {
        success: response.success,
        message: response.message,
        data: response.data,
        error: response.error
      });
      
      if (response.success) {
        console.log('🎉 Form submitted successfully!');
        console.log('📧 Email status:', {
          userEmailSent: response.data?.userEmailSent,
          companyNotified: response.data?.companyNotified,
          submissionId: response.data?.submissionId
        });
        
        setSubmissionState({
          isSubmitting: false,
          isSubmitted: true,
          error: null,
          success: true
        });
        
        // Reset form
        console.log('🔄 Resetting form data...');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          console.log('🔄 Resetting success state...');
          setSubmissionState(prev => ({ ...prev, isSubmitted: false, success: false }));
        }, 5000);
      } else {
        console.log('❌ Form submission failed');
        console.log('🔥 Error details:', response.error);
        
        // Handle API validation errors
        if (response.details) {
          console.log('📝 Validation errors from API:', response.details);
          const newErrors: FormErrors = {};
          response.details.forEach(detail => {
            newErrors[detail.field] = detail.message;
          });
          setErrors(newErrors);
        }
        
        setSubmissionState({
          isSubmitting: false,
          isSubmitted: false,
          error: handleApiError(response),
          success: false
        });
      }
    } catch (error) {
      console.log('💥 Unexpected error during form submission:');
      console.error('🔥 Error object:', error);
      console.error('🔥 Error message:', error instanceof Error ? error.message : 'Unknown error');
      console.error('🔥 Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      
      setSubmissionState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Network error. Please check your connection and try again.',
        success: false
      });
    }
    
    console.log('================================================\n');
  };

  const inputClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200";
  const errorClasses = "border-red-500 focus:ring-red-400";

  if (submissionState.isSubmitted && submissionState.success) {
    return (
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-gray-300 mb-4">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <p className="text-sm text-gray-400">
            Check your email for a confirmation message with next steps.
          </p>
          <Button
            onClick={() => setSubmissionState(prev => ({ ...prev, isSubmitted: false, success: false }))}
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Alert */}
        {submissionState.error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-red-400 font-medium">Submission Failed</h4>
              <p className="text-red-300 text-sm mt-1">{submissionState.error}</p>
            </div>
          </div>
        )}

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
              placeholder="Your full name"
              required
              disabled={submissionState.isSubmitting}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
              placeholder="your.email@example.com"
              required
              disabled={submissionState.isSubmitting}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              <Building className="inline w-4 h-4 mr-2" />
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={`${inputClasses} ${errors.company ? errorClasses : ''}`}
              placeholder="Your company name (optional)"
              disabled={submissionState.isSubmitting}
            />
            {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`${inputClasses} ${errors.phone ? errorClasses : ''}`}
              placeholder="+233 XX XXX XXXX (optional)"
              disabled={submissionState.isSubmitting}
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            <Briefcase className="inline w-4 h-4 mr-2" />
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.service ? errorClasses : ''}`}
            disabled={submissionState.isSubmitting}
          >
            <option value="">Select a service (optional)</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Your Message * (minimum 10 characters)
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`${inputClasses} resize-vertical ${errors.message ? errorClasses : ''}`}
            placeholder="Tell us about your project, goals, or how we can help you grow your business... (minimum 10 characters)"
            required
            disabled={submissionState.isSubmitting}
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          <div className="flex justify-between items-center mt-1">
            <p className={`text-xs ${formData.message.length < 10 ? 'text-red-400' : 'text-gray-400'}`}>
              {formData.message.length}/2000 characters {formData.message.length < 10 && `(need ${10 - formData.message.length} more)`}
            </p>
            {formData.message.length >= 10 && (
              <p className="text-xs text-green-400">✓ Minimum length met</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={submissionState.isSubmitting}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 text-lg rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submissionState.isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {/* Form Footer */}
        <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-700">
          <p>
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-yellow-400 hover:text-yellow-300 underline">
              Terms of Service
            </a>
          </p>
          <p className="mt-2">
            We typically respond within 24 hours. For urgent matters, call us directly.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
