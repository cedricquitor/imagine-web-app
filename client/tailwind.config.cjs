/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      fredoka: ["Fredoka One", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
