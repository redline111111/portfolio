/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor:{
        "gh": "url('/public/red-cursor.png');"
      },
      height: {
        '128': '32rem',
      },
      boxShadow: {
        'button': '5px 5px 5px rgba(0, 0, 0, 0.25);',
        'blur': "0 0 8px 8px #171717 inset;"
      },
      width: {
        'card': '45%;',
      },
    },
  },
  plugins: [],
}