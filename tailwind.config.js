const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        offblack: "#191919",
        accent: {
          darkest: "#412801",
          dark: "#9c6615",
          DEFAULT: "#0a4910",
          hover: "#11731b",
          light: "#ff9503",
          light_hover: "#ffbb5d",
          lightest: "#f1f3ea",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
