/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

    },
    plugins: [],
  }
}

