/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom breakpoint
        'sm': '640px',  // Default small screen
        'md': '768px',  // Default medium screen
        'l': '800px',  
        'lgg': '1150px', // Default large screen
        'xl': '1280px', // Default extra large screen
        '2xl': '1536px', // Default 2x large screen
      },
    },
  },
  plugins: [],
}

