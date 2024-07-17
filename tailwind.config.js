/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d1c1c',
        primaryLight: 'fff',
        brandRed: '#E8393D',
        brandDarkRed: '#B22222',
        // brandGreen: '#2c7b3b',
        brandGreen: '#2E873D',
        brandDarkGreen: '#1e4826',
        brandLight: '#faf8e4',
        brandLight80: '#f7f5e3c1',
        brandBlack: '#231c13',
        brandGray: '#282624',
        secondary: '#888',
        dark: '#303030'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cursive: ['Ephesis', 'cursive'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        }
      },
    },
  },
  plugins: [],
}

