/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor  : "black",
        secondColor : "yellow",
        thirdColor : "white"
      },
      fontFamily: {
        farta: "Poppins"
      }
    },
  },
  plugins: [],
}

