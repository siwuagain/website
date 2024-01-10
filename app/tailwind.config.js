/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '25vw': '25vw', // p-80% - doesn't work
      }
    },
  },
  plugins: [],
}

