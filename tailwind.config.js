/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#F85E9F',
        secondary : '#222831',
        'p-50' : '#19182550',
        p : '#191825'
      },
      fontSize : {
        'h1' : '40px',
        h2 : '16px',
        'fs-p' : '16px'
      },
      spacing : {
        wider : '40px',
        thin : '16px',
        wide : '32px',
        normal : '24px',
        
      }
    },
  },
  plugins: [],
}

