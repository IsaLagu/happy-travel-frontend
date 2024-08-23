/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors:{
            "blue": "#0079FF",
            "green": "#00DFA2",
            "red": "#FF0060",
            "cream": "#FBFDCE",
        },
        fontFamily: {
            jaldi: ["Jaldi", "sans-serif"],
        },
        width:{
          '128': '200px',
        }
    },
  },
  plugins: [],
};
