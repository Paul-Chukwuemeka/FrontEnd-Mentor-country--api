/** @type {import('tailwindcss').Config} */
const config = {
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

export default config;
