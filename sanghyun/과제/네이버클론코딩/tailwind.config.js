/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '200': '200px', 
        '300': '300px', 
        '400':'400px',
        '600':'600px',
        '800': '800px', 
        '1200': '1200px', 
      },
      padding: {
        '250': '250px',  
      },
      height:{
        '100':'100px'
      }
    },
  },
  plugins: [],
}

