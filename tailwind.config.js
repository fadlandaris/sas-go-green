/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#616161",
        // secondary: "#ee626b",
        secondary: '#399918',
        tertiary: "#212529",
        text: '#212529',
        grays: '#aaaaaa',
        bg: '#f6f6f6',
        body: '#4a4a4a'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};