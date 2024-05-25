// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project's structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Adjust to your primary color
        secondary: '#FEB65E', // Adjust to your secondary color
        accent: '#6D28D9', // Adjust to your accent color
      },
      keyframes: {
        revealText: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        revealText: 'revealText 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
