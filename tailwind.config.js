/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('src/assets/pngs/login-image2.png')",
      },
      fontSize: {
        small: '12px',
        meduim: '16px'
      },
      textColor: {
        dark: ''
      },
      colors: {
        green: '#0f5a02'
      }
    },
  },
  plugins: [],
}

