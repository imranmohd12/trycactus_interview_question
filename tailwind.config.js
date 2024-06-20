/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#F5F5F5",
        cactusgreen: "#28AEAE",
        labelgray: "#8392AA",
        inputbordergray: "#DBE2ED",
        tabgray: "#C0CBDA"
      }

    },
  },
  plugins: [],
}

