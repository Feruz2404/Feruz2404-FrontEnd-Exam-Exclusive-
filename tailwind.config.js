import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#000000",
      secondary: "#ffffff",
    },
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1308px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
