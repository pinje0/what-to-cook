/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        parallax: "url('/images/f1c3fc727775a7378b32c4596e2e0ca2.gif')",
      },
      colors: {
        // primary: '#78716c',
        primary: '#41B883',
        secondary: '#94a3b8',
        dark: '#121212',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
