// API Configuration for static HTML files
// This script sets the API URL globally for use in HTML files

(function() {
  // Try to get from environment variable (set during build/deployment)
  // or default to production URL
  window.__API_URL__ = '__VITE_API_URL__'; // This will be replaced during build
  
  // If the placeholder wasn't replaced, use default
  if (window.__API_URL__ === '__VITE_API_URL__' || !window.__API_URL__) {
    // Check if we're on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.__API_URL__ = 'http://localhost:3001';
    } else {
      // Production: This should be set via environment variable during deployment
      // You can manually set it here for testing
      window.__API_URL__ = 'https://eventazia-backend.onrender.com';
    }
  }
  
  console.log('API URL configured:', window.__API_URL__);
})();
