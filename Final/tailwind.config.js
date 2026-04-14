/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#424874",
        secondary: "#A6B1E1",
        tertiary: "#DCD6F7",
        background: "#F4EEFF",
      },
    },
  },
  plugins: [],
};
