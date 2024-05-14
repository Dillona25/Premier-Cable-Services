/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('./src/images/Hero.png')",
        Cencon: "url('./src/images/Cencon.png')",
        Contact: "url('./src/images/ContactImage.png')",
        Menu: "url('./src/assets/Menu.svg')",
        MenuBlack: "url('./src/assets/MenuBlack.svg')",
        closeMenu: "url('./src/assets/CloseMenu.svg')",
        ButtonArrow: "url('./src/assets/ButtonArrow.svg')",
        CarouselRight: "url('./src/assets/CarouselRight.svg')",
        CarouselLeft: "url('./src/assets/CarouselLeft.svg')",
        LinkedIn: "url('./src/assets/LinkedIn.svg')",
      },
      fontFamily: {
        DMSans: ["DM Sans, sans-serif"],
        Poppins: ["Poppins, sans-serif"],
      },
      screens: {
        xs: { min: "400px" },
        sm: { min: "501px" },
        md: { min: "800px" },
        lg: { min: "1300px" },
        xl: { min: "1441px" },
      },
    },
  },
  plugins: [],
};
