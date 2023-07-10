/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101010',
        brand: '#6166dc',
      },
      textColor: {
        primary: '#ededed',
        secondary: '#a0a0a0',
      },
    },
  },
  plugins: [],
};
