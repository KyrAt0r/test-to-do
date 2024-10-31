/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Используем класс для включения темной темы
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: '0'
      },
      colors: {
        background: {
          light: '#f9fafb',
          dark: '#111827'
        },
        text: {
          light: '#111827',
          dark: '#f9fafb'
        },
        primary: {
          light: '#3b82f6',
          dark: '#141551'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
