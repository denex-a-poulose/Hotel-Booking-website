/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
      colors: {
        primary: {
          blue: "#3252DF",
          dark: "#152C5B",
        },
        sky: "#EAF1FF",
        secondary: "#B0B0B0", // Single custom color
        neutral: "#E5E5E5", // Neutral gray
      },
    },
  },
  plugins: [],
};
