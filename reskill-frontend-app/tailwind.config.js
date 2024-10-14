  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'custom-gray':'#E6E6E6',
          'custom-card-gray': '#828282'
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }

