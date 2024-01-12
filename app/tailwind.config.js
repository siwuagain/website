/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18vw': '18vw', // p-80% - doesn't work
      }
    },
  },
  plugins: [],
}

