/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: {"min" : "375px" , "max": "640px"},
      md: {"min" : "768px" , "max": "1024px"},
      lg: {"min" : "1025px" , "max": "1441px"}
    },
    fontFamily: {
      "Open-Sans": ["Open Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": " 0px 2px 7px 0px rgba(0, 0, 0, 0.10)",
        "4xl": " 2px 3px 6px 1px rgba(255, 82, 193, 0.17)",
        "5xl": " 0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
        "6xl": " 0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
      },
      dropShadow: {
        "3xl": "0px 3px 7px rgba(0, 37, 46, 0.22)",
      },
      backgroundImage: {
        'hero-pattern-mobile': "url('/public/images/bg-hero-mobile.svg')",
        'hero-pattern-desktop': "url('/public/images/bg-hero-desktop.svg')",
      },
    },
  },
  plugins: [],
};
