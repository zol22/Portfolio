/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DFD3C3', //
        secondary: '#ba867b', // Light gray
        accent: '#e3e3e3', // Soft gray
        textPrimary: '#3d3d3d', // Dark gray text
        textSecondary: '#5e5e5e', // Lighter gray text
      },
    },
  },
  plugins: [],
}

