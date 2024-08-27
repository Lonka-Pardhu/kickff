/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sfregular: ["SF-Pro-Display-Regular", "sans-serif"],
        sfbold: ["SF-Pro-Display-Bold", "sans-serif"],
        sfsemibold: ["SF-Pro-Display-Semibold", "sans-serif"],
        pcuregular: ["PlaywriteCU-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
