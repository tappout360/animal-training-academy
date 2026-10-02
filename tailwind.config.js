/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f9f4',
          100: '#e1f2e6',
          200: '#c4e4ce',
          300: '#97cfa9',
          400: '#64b27f',
          500: '#3f965d',
          600: '#2e7848',
          700: '#265f3a',
          800: '#214c30',
          900: '#1c3f29',
          950: '#0c2215',
        },
        clover: {
          DEFAULT: '#166534',
          light: '#22c55e',
          dark: '#14532d'
        },
        badge: {
          gold: '#f59e0b',
          silver: '#94a3b8',
          bronze: '#d97706',
          clover: '#10b981',
          ruby: '#ef4444',
          sapphire: '#3b82f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
