/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7a6ba9',
        'dark.purple': '#432c81',
        'light.purple': '#ccc3ff',
        'dark.brown': '#58315a',
        orange: '#ff8989',
        'dark.yellow': '#ecbb5f',
        'dark.gray': '#868686',
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
      display: ['group-hover'],
    },
  },
  plugins: [
    function addVariant({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
