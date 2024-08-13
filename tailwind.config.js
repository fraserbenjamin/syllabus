module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#F7F6F2",
          200: "#EFEDE7",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#5d4037",
          800: "#4e342e",
          900: "#3e2723",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
