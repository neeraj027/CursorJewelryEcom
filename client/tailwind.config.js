/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#06382A',
        'inverse-green': '#F9C7D5',
        'custom-cursorGreen': '#F9C7D5',
        gold: '#D3B486',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
