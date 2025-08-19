/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'divine-blue': '#2a52be',
        'divine-blue-dark': '#1e3a85',
        'divine-blue-light': '#4169e1',
        'divine-gold': '#2a52be',
        'divine-dark': '#1a1a1a',
        'divine-gray': '#6b7280',
        'divine-light': '#f9fafb',
      },
      fontFamily: {
        'sans': ['Albert Sans', 'sans-serif'],
        'serif': ['Albert Sans', 'sans-serif'], // Remplace aussi font-serif par Albert Sans
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
