/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #aa70e0 0%, #7059e2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #e4b8bf 0%, #cec4ef 100%)',
      },
      colors: {
        'light': '#424550',
        'dark': '#c7c6d3',
      },
    },
  },
  plugins: [],
}

