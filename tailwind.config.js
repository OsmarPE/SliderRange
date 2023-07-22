/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'content':' 0px 10px 40px 0px rgba(31, 130, 110, 0.13)',
        'circle': '0px 4px 30px rgba(31, 130, 110, 0.38)'
      },
      borderRadius:{
        'main': '6.25rem',
        'number': '3.125rem 3.125rem 3.125rem 0.625rem'
      },
      backgroundImage:{
        'main':'linear-gradient(90deg, #1F826E 0%, #0A2925 100%)'
      },
      fontFamily:{
        'primary': ['Outfit', 'sans-serif']
      }
    
    },
  },
  plugins: [],
}