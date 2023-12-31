/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkB: "#203239",
        orange: "#F6762E",
        bg:"#EEEDDE"
      }
    },
  },
  plugins: [],
}

