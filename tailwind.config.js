/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      },
      fontFamily: {
        'Regular': ['Regular'],
        'Bold': ['Bold'],
        'inter': ['Inter']
      },
    },
  },
  plugins: [],
}

