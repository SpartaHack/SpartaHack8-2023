/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'sh-black': '#121212',
        'sh-white': '#f5f5f5',
        'sh-pink': '#F70063',
        'sh-blue': '#1E4FFF'
      }
    },
  },
  plugins: [],
}