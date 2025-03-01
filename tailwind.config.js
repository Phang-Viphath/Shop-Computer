/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Public/*.html"
  ],
  theme: {
    extend: {
      width:{
        400:[
          "400px"
        ]
      },
      height:{
        290:[
          "276px"
        ],
        500:[
          "390px"
        ]
      }
    },
  },
  plugins: [],
}

