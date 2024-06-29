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
          50: '#F6F6F6',
          100: '#ECECEC',
          200: '#E3E3E3',
          300: '#D9D9D9',
          400: '#D0D0D0',          
          500: '#C6C6C6',
          600: '#A5A5A5',
          700: '#848484',
          800: '#636363',
          900: '#424242',
        },
        'accent-dark': {
          50: '#EDD7DF',
          100: '#DAAEBF',
          200: '#C8869F',
          300: '#B55D7F',
          400: '#A3345F',
          500: '#900C3F',
          600: '#780A35',
          700: '#60082A',
          800: '#480620',
          900: '#300415',
        },
      },      
    },
  },
  plugins: [],
}

