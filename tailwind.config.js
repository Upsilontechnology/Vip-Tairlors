/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        '4xl': '1900px',
        '3xl': '1700px',
      },
    },
  },
  plugins: [require("daisyui")],
};
