/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#EEEEEE',
        'secondary' : '#76ABAE' 
      }
    },
    screens: {
      'sm': '700px',
      'md': '1000px',
      'lg': '1200px',
    },
  },
  plugins: [],
}