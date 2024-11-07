/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
      animation: {
        'spin-slow': 'rotate 20s linear infinite'
      },
      fontFamily:{
        sans : ['Segoe UI', 'Helvetica'],
        poppins: ['Poppins', 'sans-serif'],
        paci: ['Pacifico ', 'cursive']
      },
      fontSize: {
        'h4': 'calc(1.275rem + 0.3vw)', 
        'h5': '1.25rem'
      },
    },
  },
  plugins: [],
}

