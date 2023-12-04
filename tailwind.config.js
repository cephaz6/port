/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,

      screens: {
        xsm: { max: "375px" },
        sm: { max: "600px" },
        md: { max: "728px" },
        lg: { max: "984px" },
        xl: { max: "1240px" },
        "2xl": "1496px",
      },
    },

    fontFamily: {
      "h-txt": ["Space Grotesk', sans-serif;"],
      "b-txt": ["'Quicksand', sans-serif;"],
    },
    extend: {},
  },
  plugins: [],
};
