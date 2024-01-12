/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['Montserrat'],
      mono: ['Montserrat'],
      display: ['Montserrat'],
      body: ['Montserrat']
    },
    extend: {
      colors: {
        'main': '#121212',
        'second': '#434343',
        'navbar': 'rgba(214, 214, 214, 0.12)',
        'white': '#ffffff',
        'semiwhite': '#D9D9D9'
    
      }
    },
  },
  plugins: [],
}

