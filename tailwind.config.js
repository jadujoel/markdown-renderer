/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust the path and file types to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
