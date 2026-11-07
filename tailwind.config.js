/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF9',
          100: '#FFF8F1', // Main warm background
          200: '#FDF0E2',
        },
        plum: {
          800: '#3D3356',
          900: '#2B2340', // Main deep plum text
          950: '#1D172C',
        },
        peach: {
          light: '#FFF0E6',
          DEFAULT: '#FFD8C2',
          medium: '#FFAF87',
          dark: '#E28357',
        },
        mint: {
          light: '#EEFAF4',
          DEFAULT: '#CDEFE0',
          medium: '#A3E7C9',
          dark: '#58B98F',
        },
        lilac: {
          light: '#F4EFFC',
          DEFAULT: '#DCCFF5',
          medium: '#C5B0EE',
          dark: '#8C67CB',
        },
        coral: {
          light: '#FFB2A7',
          DEFAULT: '#FF8A7A', // Accent highlight & CTA
          hover: '#FF705F',
          dark: '#D94D3B',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'sticker': '4px 4px 0px #2B2340',
        'sticker-lg': '6px 6px 0px #2B2340',
        'sticker-xl': '8px 8px 0px #2B2340',
        'sticker-hover': '7px 7px 0px #2B2340',
        'soft-peach': '0 12px 30px -8px rgba(255, 175, 135, 0.35)',
        'soft-lilac': '0 12px 30px -8px rgba(197, 176, 238, 0.4)',
        'soft-mint': '0 12px 30px -8px rgba(163, 231, 201, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'wiggle-slow': 'wiggle 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
      },
    },
  },
  plugins: [],
}
