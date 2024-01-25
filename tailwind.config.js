/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      'lg': {'max': '1440px'},
      // => @media (max-width: 1023px) { ... }

      'sm': {'max': '375px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      "Open Sans": ["Open Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
