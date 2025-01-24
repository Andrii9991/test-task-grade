/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "360px", max: "576px" },
        md: { min: "577px", max: "1199px" },
        lg: { min: "1200px", max: "1366px" },
        xl: { min: "1367px", max: "1920px" },
        "2xl": { min: "1921px" },
      },
    },
  },
  plugins: [],
};
