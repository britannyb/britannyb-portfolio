/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#999999",
        "dark-grey": "#1D1D1D",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { textTransform: "none" },
          "20%, 40%, 60%, 80%": { textTransform: "uppercase" },
          "10%, 30%, 50%, 70%, 90%": { textTransform: "lowercase" },
        },
      },
      animation: {
        glitch: "glitch 1.5s infinite",
      },
    },
  },
  plugins: [],
};
