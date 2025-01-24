/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "360px" },
        md: { min: "577px" },
        lg: { min: "1200px" },
        xl: { min: "1367px" },
      },
      fontFamily: {
        formular: ["Formular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
