/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg":"#f3f5f7",
        "Anti-flash-white":"#E9ECEF",
        "Eerie_black":"#212529",
        "Seasalt":"#F8F9FA",
        'space_cadet': {
          DEFAULT: '#233048',
          100: '#070a0e',
          200: '#0e131d',
          300: '#151d2b',
          400: '#1c263a',
          500: '#233048',
          600: '#3d547f',
          700: '#5c79b0',
          800: '#92a6cb',
          900: '#c9d2e5'
        },
        'yinmn_blue': {
          DEFAULT: '#415a77',
          100: '#0d1218',
          200: '#1a242f',
          300: '#273647',
          400: '#34485f',
          500: '#415a77',
          600: '#587aa1',
          700: '#819bb9',
          800: '#abbcd1',
          900: '#d5dee8'
        },
        'vista_blue': {
          DEFAULT: '#7c95b6',
          100: '#161d27',
          200: '#2c3b4e',
          300: '#425876',
          400: '#58769d',
          500: '#7c95b6',
          600: '#97aac4',
          700: '#b1c0d3',
          800: '#cbd5e2',
          900: '#e5eaf0'
        },
        'silver': {
          DEFAULT: '#c6bdb6',
          100: '#2b2622',
          200: '#564b43',
          300: '#817165',
          400: '#a5978d',
          500: '#c6bdb6',
          600: '#d2cbc6',
          700: '#ddd8d4',
          800: '#e9e5e2',
          900: '#f4f2f1'
        },
        'platinum': {
          DEFAULT: '#DEE2E6',
          100: '#2e2f2a',
          200: '#5b5e53',
          300: '#898c7e',
          400: '#b4b6ad',
          500: '#e0e1dd',
          600: '#e5e6e3',
          700: '#ececea',
          800: '#f2f3f1',
          900: '#f9f9f8'
        },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      sans: ['Inter', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
