/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      '*': {
        fontFamily: "Poppins, sans-serif",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,

      }
    },
  },
  plugins: [],
}
