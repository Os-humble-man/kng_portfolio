/** @type {import('tailwindcss').Config} */
import darkbg from "../"
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0E8F6',
        secondary: '#BCE7FA',
        accent: '#4FC3F7',
        customGray: '#484E53',
        textColor: '#050505',
        darkPrimary: '#0a0505',
        darkGray: '#1F2937',
        darkText: '#E1E1E1'
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        logofont: ['Oleo Script', 'system-ui'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, #00f, #0ff)',
        'dark-image': "url('/background.jpg')",
      },
    },
  },
  plugins: [],
}




