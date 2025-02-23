/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E56E7",
        lightBg: "#F8F7FF",
        greyLight: "#F0F0F6",
        greyMedium: "#A0A0A0",
        greyDark: "#333333",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Regular"],
      },
      fontSize: {
        h1: "48px",
        h2: "30px",
        genre: "20px",
        body: "16px",
        bookTitle: "12px",
        bookAuthor: "12px",
      },

    },

  },
  plugins: [],
}

