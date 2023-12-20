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
