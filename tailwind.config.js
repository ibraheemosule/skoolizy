/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7a6ba9',
        'purple.dark': '#432c81',
        'purple.light': '#ccc3ff',
        'brown.dark': '#58315a',
        orange: '#ff8989',
        'yellow.dark': '#ecbb5f',
        'gray.dark': '#868686',
      },
      screens: {
        xs: '440px',
        xlg: '900px',
      },

      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      display: ['group-hover', 'group-focus'],
    },
  },
  plugins: [
    function addVariant({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
