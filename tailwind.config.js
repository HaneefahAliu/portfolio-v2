/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'secondary-text': '#C0C1CF',
        'highlight': '#BFF500',
        'border-line': '#EDEDED',
        'grey': '#7C7D89',
      }
    },
  },
  plugins: [],
}