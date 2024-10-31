import '@testing-library/jest-dom';
// src/setupTests.ts
import '@testing-library/jest-dom';

// Mock for window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // поддержка старого API
    removeListener: () => {}, // поддержка старого API
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  })
});
