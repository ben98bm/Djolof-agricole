const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    backgroundImage: theme => ({
        'hero-background': "url('legumes05.jpg')",
    })}
  ,
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.lightBlue,
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      // red: colors.rose,
      // pink: colors.fuchsia,
    },
    fontFamily: {
      quicksand: ["Quicksand"],
    },
    // extend: {
    //   //   spacing: {},
    //   //   borderRadius: {},
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
