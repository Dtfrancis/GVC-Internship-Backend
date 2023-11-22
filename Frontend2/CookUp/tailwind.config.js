/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#18328F'
        },
        yellow: {
          400: '#E9BA10'
        },
        pink: {
          700: '#FDCBE4'
        },
        red: {
          700: '#D85838'
        }
      }
    },
  },
  plugins: [],
}

