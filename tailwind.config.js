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
    },
  },
  plugins: [],
}

