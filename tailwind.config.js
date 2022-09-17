/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-2s': 'spin 2s linear infinite',
        translateXAnimation: 'translateXAnimation 2s ease-in-out infinite',
        translate_x_100: 'translate_x_100 4s ease-in-out infinite',
        translate_x_100_reverse: 'translate_x_100_reverse 4s ease-in-out infinite',
        translate_y_100: 'translate_y_100 4s ease-in-out infinite',
        translate_y_100_reverse: 'translate_y_100_reverse 4s ease-in-out infinite',

      }
      , keyframes: {
        translateXAnimation: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(150px)' },
        },
        translate_x_100: {
          '0%': { transform: 'translateX(-35px)' },
          '100%': { transform: 'translateX(100%)' },
        },
        translate_x_100_reverse: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-35px)' },
        },
        translate_y_100: {
          '0%': { transform: 'translateY(-35px)' },
          '100%': { transform: 'translateY(100%)' },
        },
        translate_y_100_reverse: {
          '0%': { transform: 'translateY(35px)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      }


    },
  },
  plugins: [],
}
