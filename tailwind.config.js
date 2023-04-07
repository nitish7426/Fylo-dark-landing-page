/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
      },
      colors: {
        "primary-1": "hsl(217, 28%, 15%)",
        "primary-2": "hsl(218, 28%, 13%)",
        "primary-3": "hsl(216, 53%, 9%)",
        "primary-4": "hsl(219, 30%, 18%)",
        "accent-1": "hsl(176, 68%, 64%)",
        "accent-2": "hsl(198, 60%, 50%)",
        "accent-3": "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
