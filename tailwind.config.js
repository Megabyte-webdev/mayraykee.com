

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('src/assets/pngs/login-image2.png')",
        'login-background2': "url('src/assets/svgs/login-image-2.svg')",
        'forgot-password-background': "url('src/assets/pngs/man-with-laptop.png')",
        'card-background': "url('src/assets/pngs/men-in-board.png')"
      },
      fontSize: {
        small: '12px',
        meduim: '16px'
      },
      content: {
        'link': "url('src/assets/pngs/edit.png')",
        'link-icon': "url('src/assets/pngs/link-icon.png')",
      },
      textColor: {
        dark: ''
      },
      colors: {
        green: '#0f5a02',
        customBrown: '#313131',
      }
    },
  },
  plugins: [],
}

