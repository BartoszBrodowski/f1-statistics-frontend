const plugin = require("tailwindcss/plugin");
const {
  blackA,
  mauve,
  violet,
  indigo,
  purple,
  red,
} = require("@radix-ui/colors");

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
        jetblack: "#1b1b1b",
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
        ...red,
      },
      boxShadow: {
        dark: "0px 0px 5px 0px rgba(36, 38, 50, 1);",
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
