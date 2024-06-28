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
      DM:[ "DM Sans", "sans-serif"],
      fjalla: ['"Fjalla One"', 'sans-serif'],


    },
    extend: {
      colors: {
        custom: {
          'light-blue': '#070054',
        },
      },
    },
  },
  plugins: [],
}