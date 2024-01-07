/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    
    borderColor: theme=>({
      primary: "#FFC636",
      secondary: "#0A0B5B",
    }),
    extend: {
      textColor: theme=>({
        primary: "#FFC636",
        secondary: "#0A0B5B",
      }),
      backgroundColor: theme=>({
        primary: "#FFC636",
        secondary: "#0A0B5B",
    }),
      fontFamily: {
        lora: "'Lora', serif"
      }
    },
  },
  plugins: [],
}