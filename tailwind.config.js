/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'], // Add font alias
        nunito: ['Nunito', 'sans-serif'],
      },
       wordSpacing: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.25em',
      },
    },
  },
  plugins: [require("daisyui"),
    require('tailwind-scrollbar')
  ],

  daisyui: {
    themes: ["light"], // Force light mode
  },
};
