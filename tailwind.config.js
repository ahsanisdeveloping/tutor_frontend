/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"], // Add font alias
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Force light mode
  },
};
