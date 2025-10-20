/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'screen-lg': "url('/src/assets/background-01.jpg')",
        'screen-bg': "url('/src/assets/background-02.jpg')",
        'header-bg': "url('/src/assets/background-03.jpg')",
      },        
      colors: {    
        transparent: 'transparent',
        current: 'currentColor',
        'accent-light': {
          50: '#fffef9',
          100: '#fffdf4',
          200: '#fffcf2',
          300: '#fffcf0',
          400: '#fffcee',          
          500: '#fffced',
          600: '#e5e2d5',
          700: '#ccc9bd',
          800: '#b2b0a5',
          900: '#99978e',
        },
        'accent-dark': {
          50: '#ffe8e2',
          100: '#ffd2c5',
          200: '#ffbba9',
          300: '#fda48d',
          400: '#f88d72',
          500: '#f17558',
          600: '#c56149',
          700: '#9b4e3b',
          800: '#723b2e',
          900: '#4c2a21',
        },
      },      
    },
  },
  plugins: [],
}

