/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'FoundryMonoline-regular': ['FoundryMonoline-Regular'],
        'FoundryMonoline-bold': ['FoundryMonoline-Bold']
      }
    },
  },
  plugins: [],
}

