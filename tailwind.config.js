/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#f7f0fb',
        dashBoard:"#56b147",
        backGroundColor:"#fc8134",
        searchBar: "#f69045"
      },
    },
  },
  plugins: [],
};
