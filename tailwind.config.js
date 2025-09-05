/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#7c3aed', // purple-ish accent
        accent2: '#06b6d4', // cyan accent
      },
      boxShadow: {
        'glass': '0 8px 30px rgba(2,6,23,0.12)',
      },
    },
  },
  plugins: [],
};
