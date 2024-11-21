/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#594423', //Dark Champagne 
        secondary: '#d4c5ae', // Light Champagne
        accent: '#e3e3e3', // Soft gray
        textPrimary: '#3d3d3d', // Dark gray text
        textSecondary: '#5e5e5e', // Lighter gray text
      },
    },
  },
  plugins: [],
}

