/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend:{
      colors: {
        'primary':{
          200: '#FAFFFB',
          500: '#D7F5DC',
          800: '#20B15A',
          900: '#00CA72',
        },
        'secondary': '#F55F1D',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
