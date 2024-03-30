/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './*/*.html',
    './index.html', 
    './src/**/*.{js,jsx}',
    '*.{html,js,jsx}',
  ],
  theme: {
    
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
  
        white: '#ECFEFF',
  
        cyan: {
          light: "#22d3ee",
          dark: "#22d3eeb3",
        },
        teal: {
          1: "#00151c",
          2: "#121d21"
        }
      },
      fontFamily: {
        sans: ["Calibre", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}