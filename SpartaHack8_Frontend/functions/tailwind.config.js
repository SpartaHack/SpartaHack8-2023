/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}",
  "./views/index.ejs"],
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