/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '30px 25px 25px rgba(0, 0, 0, 0.8)',
        '4xl': '30px 35px 35px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        '3xl': '30px 65px 60px -15px rgba(0, 0, 0, 0.8)',
        '5xl': '0px 135px 130px 30px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'mountain': "url('./assets/images/mountain.jpg')"
      },
      fontFamily: {
        londrina: ['Londrina Solid'],
      }
    },
  },
  plugins: [],
}

