/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx", "./*.tsx"],
  plugins: [],
  theme: {
    extend: {
      height: {
        16: "16px",
        21: "21px",
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
        16: "16px",
        21: "21px",
        30: "30px",
        50: "50px",
        77: "77px",
        88: "86px",
        92: "94px",
        300: "300px",
        350: "350px",
        400: "400px",
      },
      fontSize: {
        xs: ".7rem",
        sm: ".8rem",
        md: ".9rem",
        lg: "1rem",
        xl: "1.2rem",
      },
      borderRadius: {
        md: "3px",
        lg: "8px",
        xl: "12px",
        _2xl: "25%",
      },
      colors: {
        "pink-main": "#F94C84",
        "purple-main": "#D25EA9",
        "gold-500": "#FFC138",
        "gold-300": "#FFC741",
        "black-100": "#727272",
        "black-200": "#666666",
        "black-300": "#535353",
        "black-400": "#404040",
        "black-500": "#2B2B2B",
        "black-600": "#181818",
        "black-700": "#0F0F0F",
        "black-800": "#080808",
        "black-900": "#000000"
      },
    },
  },
};
