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
        brandRed: 'red',
        brandDarkRed: '#B22222',
        brandGreen: '#478753',
        brandDarkGreen: '#305737',
        brandLight: '#f7f5e3',
        brandBlack: '#1c1815',
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

