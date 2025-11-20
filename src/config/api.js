// API Configuration
// This file provides the API base URL for all frontend requests

/**
 * Get the API base URL
 * In production (static HTML files), use the environment variable set during build
 * For local development, default to localhost
 */
export const getApiUrl = () => {
  // For Vite/React components
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env.VITE_API_URL || 'http://localhost:3001';
  }
  
  // For static HTML files, check window.__API_URL__ set by config script
  if (typeof window !== 'undefined' && window.__API_URL__) {
    return window.__API_URL__;
  }
  
  // Default fallback
  return 'http://localhost:3001';
};

export const API_URL = getApiUrl();
