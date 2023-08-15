const plugin = require("tailwindcss/plugin");
const { blackA, mauve, gray, red } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "main-black": "#1b1b1b",
        "secondary-black": "#222222",
        ...blackA,
        ...mauve,
        ...gray,
        ...red,
      },
      boxShadow: {
        dark: "0px 0px 5px 0px rgba(36, 38, 50, 1);",
      },
      fontFamily: {
        quote: ["Times new roman", "serif"],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }: any) => {
      matchUtilities({
        perspective: (value: any) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
