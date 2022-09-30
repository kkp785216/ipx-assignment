/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'sc1440': '1440px',
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("method", ".method.active &");
      addVariant("collapsecard", ".collapsecard.active &");
    }),
  ],
}
