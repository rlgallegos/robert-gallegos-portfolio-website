/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        backgroundImage: {
            'desktop': "url('/public/backgrounds/navy-circuits.jpg')",
            'mobile': "url('/public/backgrounds/navy-circuits-mobile.jpg')"
          },
      colors: {
        primary: '#000000',
        secondary: '#61dafb',
        darkBlue: '#061523',
        lightBlue: '#2A5EA3'
      }
    },
  },
  plugins: [],
}

