/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#2242F5',
          light: '#3D5BF6',
          dark: '#1730C7',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cobalt-sm': '2px 2px 0px #2242F5',
        'cobalt': '4px 4px 0px #2242F5',
        'cobalt-lg': '6px 6px 0px #2242F5',
        'cobalt-xl': '8px 8px 0px #2242F5',
        'cobalt-2xl': '12px 12px 0px #2242F5',
        'white-sm': '2px 2px 0px #FFFFFF',
        'white': '4px 4px 0px #FFFFFF',
        'white-lg': '6px 6px 0px #FFFFFF',
        'white-xl': '8px 8px 0px #FFFFFF',
        'white-2xl': '12px 12px 0px #FFFFFF',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
