/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ButtonArrow: "url('./src/assets/ButtonArrow.svg')",
        CarouselRight: "url('./src/assets/CarouselRight.svg')",
        CarouselLeft: "url('./src/assets/CarouselLeft.svg')",
      },
      fontFamily: {
        DMSans: ["DM Sans, sans-serif"],
        Poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
