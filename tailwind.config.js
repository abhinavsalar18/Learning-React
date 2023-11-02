/** @type {import('tailwindcss').Config} */
module.exports = {
  // use tailwind in src and it's child int html and js files
  content: ["./src/**/*.{html,js}"], 
  theme: {
   extend: {
    colors: {
      'lightGray' : "#f0f0f0"
   },

    boxShadow: {
      'custom': '2px 5px 20px rgba(209, 218, 223)',
    }
   }
  },
  plugins: [],
}

