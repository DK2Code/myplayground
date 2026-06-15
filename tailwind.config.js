/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': {
        950: '#0a0e27',
        900: '#0f1139',
        800: '#1a1f3a',
        700: '#252d4a',
      },
      'gray': {
        100: '#f3f4f6',
        300: '#d1d5db',
        400: '#9ca3af',
        600: '#4b5563',
        700: '#374151',
      },
      'blue': {
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
      },
      'purple': {
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
      },
      'pink': {
        400: '#f472b6',
      },
      'cyan': {
        400: '#22d3ee',
      },
      'green': {
        400: '#4ade80',
      },
      'white': '#ffffff',
    },
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
