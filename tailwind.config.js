module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "simpsons-blue": {
          light: "#00bcd4",
          DEFAULT: "#00bcd4",
          dark: "#0a0a0a",
        },
        "simpsons-red": "#f44336",
        "simpsons-yellow": "#ffeb3b",
        "simpsons-green": "#4caf50",
      },
      fontFamily: {
        "simpsons-font": ['Simpsons'],
        "comic": ['Comic Sans MS', 'cursive'],
      }
    },
  },
  plugins: [],
};
