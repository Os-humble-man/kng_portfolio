/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées
        primary: '#E0E8F6',
        secondary: '#BCE7FA',
        accent: '#4FC3F7',
        customGray: '#484E53',
        textColor: '#050505',
        // Couleurs pour le mode sombre
        darkPrimary: '#0a0505',  // Bleu très foncé pour le mode sombre
        darkGray: '#1F2937', // Gris foncé pour le fond
        darkText: '#E1E1E1'
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        logofont: ['Oleo Script', 'system-ui'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, #00f, #0ff)',
        'dark-image': "url('https://img.freepik.com/free-vector/grey-hexagons-black-background_78370-2098.jpg?t=st=1726293714~exp=1726297314~hmac=1870f339fb1781bc4635ddfe4c73ce8ce7cd5f45cba460a86e3356e4e95e38dc&w=1380')",
      },
    },
  },
  plugins: [],
}


