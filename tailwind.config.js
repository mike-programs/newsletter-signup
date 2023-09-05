/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      tomato: 'hsl(4, 100%, 67%)',
      charcoalGray: 'hsl(235, 18%, 26%)',
      gray: 'hsl(231, 7%, 60%)',
      darkSlateGray: 'hsl(234, 29%, 20%)',
      white: 'hsl(0,0%,100%)',
      red: 'rgb(248 113 113)',
      lightRed: '#fccccc'
    }
  },
  plugins: [],
}

