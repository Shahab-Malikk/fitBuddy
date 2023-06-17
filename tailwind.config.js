// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background1: '#19173D',
        background2:'#262450',
        tPrimary: '#00D7FF',
      },
      backgroundImage: {
        'hero-pattern': "url('https://tailwindcss.com/img/card-top.jpg')",
       
      }
    }
  }
}