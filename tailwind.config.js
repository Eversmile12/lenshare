/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx", "./*.tsx"],
  plugins: [],
  theme: {
    extend: {
      height: {
        30: "30px",
        50: "50px",
        77: "77px",
        88: "86px",
        92: "94px",
        120: "120px",
        400: "400px",
        500: "527px",
      },
      width: {
        30: "30px",
        50: "50px",
        77: "77px",
        88: "86px",
        92: "94px",
        300: "300px",
        400: "400px",
      },

      borderRadius: {
        lg: "8px",
        xl: "12px",
        _2xl: "24px",
      },
      colors: {
        "pink-main": "#F94C84",
        "purple-main": "#D25EA9",
        "gold-500": "#FFC138",
        "gold-300": "#FFC741"
      },
    },
  },
};
