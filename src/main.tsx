import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress ResizeObserver errors
const suppressResizeObserverError = () => {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0] && typeof args[0] === 'string' && args[0].includes('ResizeObserver')) {
      return;
    }
    originalError.call(console, ...args);
  };

  window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('ResizeObserver')) {
      e.stopImmediatePropagation();
    }
  });
  
  const originalOnError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (typeof message === 'string' && message.includes('ResizeObserver')) {
      return true;
    }
    if (originalOnError) {
      return originalOnError(message, source, lineno, colno, error);
    }
    return false;
  };
};

suppressResizeObserverError();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
