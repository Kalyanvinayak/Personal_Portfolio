/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1E293B',
        'secondary': '#334155',
        'accent': '#0EA5E9',
        'light': '#F1F5F9',
      }
    },
  },
  plugins: [],
};
