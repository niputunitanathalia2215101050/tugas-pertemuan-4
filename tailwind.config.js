/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "about.html", "project.html"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#d0ceba',
        dark: '#0f172a',
        ungu: '#5B0888',
        ungu_muda:'#9D76C1',
      }
    },
  },
  plugins: [],
}
