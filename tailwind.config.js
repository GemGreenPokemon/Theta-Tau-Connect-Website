/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theta-red': '#8B0000', // Official Dark Red (Hex: 8B0000, RGB: 137,32,52)
        'theta-gold': '#FFCC33', // Official Gold (Hex: FFCC33, RGB: 253,212,79)
        'theta-offwhite': '#EDEAB5', // Official Off-White (Hex: EDEAB5, RGB: 238,235,182)
        'theta-brown': '#8B4513', // Previous brown color (keeping for backward compatibility)
        'theta-brown-dark': '#6d3710', // Previous dark brown (keeping for backward compatibility)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 