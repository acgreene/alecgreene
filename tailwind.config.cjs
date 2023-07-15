/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      screens: {
        xxs: "360px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        primary: ["Ubuntu", "sans-serif"], 
        secondary: ["Open Sans", "sans-serif"],
        lora: ["Lora", "serif"],
        rokkitt: ["Rokkitt", "serif"]
      },
  },
  plugins: [],
}
