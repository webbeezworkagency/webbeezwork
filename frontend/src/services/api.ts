// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API service for contact form
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    userEmailSent?: boolean;
    companyNotified?: boolean;
    submissionId?: string;
  };
  error?: string;
  details?: Array<{
    field: string;
    message: string;
  }>;
}

export const contactAPI = {
  // Submit contact form
  submit: async (formData: ContactFormData): Promise<ApiResponse> => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include' as RequestCredentials,
        body: JSON.stringify(formData),
      };
      
      const response = await fetch(`${API_BASE_URL}/contact/submit`, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      return data;
    } catch (error) {
      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return {
          success: false,
          error: 'Network error. Please check your connection and try again.',
          message: 'Unable to connect to the server'
        };
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        message: 'Please try again or contact us directly'
      };
    }
  },

  // Test API connection
  test: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/test`);
      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to connect to API',
        message: 'API connection test failed'
      };
    }
  },

  // Health check
  health: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`);
      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: 'Health check failed',
        message: 'Unable to connect to server'
      };
    }
  }
};

// Utility function to handle API errors
export const handleApiError = (error: ApiResponse) => {
  if (error.details && Array.isArray(error.details)) {
    // Return validation errors as a formatted string
    return error.details.map(detail => `${detail.field}: ${detail.message}`).join('\n');
  }
  
  return error.error || error.message || 'An unexpected error occurred';
};

// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[+]?[\s\-()]*([0-9][\s\-()]*){10,15}$/;
  return phoneRegex.test(phone);
};

export const validateForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Required fields
  if (!formData.name.trim()) {
    errors.push('Name is required');
  } else if (formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.trim().length < 10) {
    errors.push(`Message must be at least 10 characters long (currently ${formData.message.trim().length})`);
  }

  // Optional field validation
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
