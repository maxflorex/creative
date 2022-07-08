/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f9f0da",
        fire: "#ff2626",
        navy: "#002F48",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
