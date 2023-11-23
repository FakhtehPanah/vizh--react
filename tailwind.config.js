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
        'regular': ['FoundryMonoline-Regular'],
        'bold': ['FoundryMonoline-Bold'],
        'inter': ['Inter']
      },
    },
  },
  plugins: [],
}

