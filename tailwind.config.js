/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        parallax: "url('/images/f1c3fc727775a7378b32c4596e2e0ca2.gif')",
      },
    },
  },
  plugins: [],
};
