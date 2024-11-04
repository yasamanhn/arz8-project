// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode by toggling a 'dark' class
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlue: {
          DEFAULT: "hsl(207, 26%, 17%)", // Dark mode background
          lightText: "hsl(200, 15%, 8%)", // Light mode text
        },
        darkGray: "hsl(0, 0%, 52%)", // Light mode input
        veryLightGray: "hsl(0, 0%, 98%)", // Light mode background
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        base: "14px", // For homepage items
        detail: "16px", // For detail page
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
};
