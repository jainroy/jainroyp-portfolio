import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initialize Tailwind config programmatically to keep index.html clean
// and ensure logic stays within the React/JS ecosystem.
const initializeTailwind = () => {
  if (typeof window !== 'undefined') {
    // @ts-ignore - Tailwind is loaded from CDN
    window.tailwind = window.tailwind || {};
    // @ts-ignore
    window.tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'light-bg': '#f8fafc',
            'dark-bg': '#0b1120',
            'light-text': '#0f172a',
            'dark-text': '#e2e8f0',
            'light-accent': '#3b82f6',
            'dark-accent': '#60a5fa',
            'light-card': '#ffffff',
            'dark-card': '#1e293b',
            'light-border': '#e2e8f0',
            'dark-border': '#334155',
          }
        }
      }
    };
  }
};

initializeTailwind();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);