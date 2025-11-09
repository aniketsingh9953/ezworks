/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#0ea5a4',
        soft: '#f8fafc',   // 👈 this defines bg-soft
      },
    },
  },
  plugins: [],
};