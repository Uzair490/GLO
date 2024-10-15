/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 30px 0px rgba(77, 84, 100, 0.05)',
      },
    },
  },
  plugins: [],
}
