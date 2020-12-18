const colors = require("tailwindcss/colors");

module.exports = {
  // purge: [
  //    './*.html',
  //    './**/*.js',
  //  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': 'Inter',
      },
      colors: {
        light: "#7c92ce",
        medium: "#5b77c0",
        dark: "#394e84",
        offgray: "#212837",
        offgrayDark: "#131727",
        offwhite: "#f5f5f5",

        gray: colors.trueGray,
        coolGray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};