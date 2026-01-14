/**
 * Configuration file for Finvyce Web App
 * Centralized configuration for easy maintenance and deployment
 */

const CONFIG = {
  // Contact Information
  contact: {
    primaryPhone: '918974668938',        // Primary contact number (Contact Us section)
    floatingPhone: '919153832948',       // Floating action buttons phone number
    email: 'support@finvyce.com',
    address: 'Mumbai, Maharashtra, India',
    companyName: 'Finvyce'
  },

  // Google Apps Script Integration
  googleAppsScript: {
    formSubmissionUrl: 'https://script.google.com/macros/s/AKfycbzF2cMkTuooBniQjcfTsO3N3UzYOqSJiSiwV8aD9duPX7jPj7ofJ7abBaYotZWveILe/exec'
  },

  // WhatsApp Configuration
  whatsApp: {
    callbackPhone: '919153832948',       // Phone number for callback requests
    messagePrefix: 'Callback request from Finvyce website'
  },

  // Application Settings
  app: {
    name: 'Finvyce',
    title: 'Finance Web App',
    description: 'Smart Financial Solutions - Fast, flexible funding for businesses.',
    version: '1.0.0'
  },

  // External Resources
  external: {
    unsplashApi: 'https://images.unsplash.com'  // Image CDN
  }
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
