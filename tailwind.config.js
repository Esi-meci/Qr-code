/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '568px',
    },
    extend: {
      colors: {
      White: 'hsl(0, 0%, 100%)',
      LightGray: 'hsl(212, 45%, 89%)',
      GrayishBlue: 'hsl(220, 15%, 55%)',
      DarkBlue: 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        outfit: ['Outfit']
      }
    },
    // fontSize: {
    //   sm: '15px'
    // },  
  },
  plugins: [],
}

