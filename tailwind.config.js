/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors: {
        warm: {
          100: '#FFF5E6',
          200: '#FFE0B2',
          300: '#FFCC80',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
      },
    },
  },
}

