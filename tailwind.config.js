/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ButtonArrow: "url('./src/assets/ButtonArrow.svg')",
      },
    },
  },
  plugins: [],
};
