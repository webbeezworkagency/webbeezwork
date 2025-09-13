export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface SubmissionState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  success: boolean;
}
