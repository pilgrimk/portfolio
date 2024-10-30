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
          50: '#dfa9c5',
          100: '#d07ea8',
          200: '#c8689a',
          300: '#c0528b',
          400: '#b83d7d',
          500: '#b1286f',
          600: '#9f2463',
          700: '#8d2058',
          800: '#7b1c4d',
          900: '#6a1842',
        },
      },      
    },
  },
  plugins: [],
}

