/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      Raleway: ['Raleway', "sans-serif"],
      kanit: ['Kanit', "sans-serif"],
      mulish: ['Mulish', "sans-serif"],
      oswald:   ['Oswald', "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
      ubuntu:['Ubuntu', "sans-serif"],

    },
    extend: {},
  },
  plugins: [],
}