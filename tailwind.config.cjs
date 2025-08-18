/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'wa-flat': ['"WA Flat Brush"', 'cursive'],
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      // individual element: hover, focus, active
      addVariant('interaction', ['&:hover', '&:focus', '&:active']);
      
      // group variant for children
      addVariant('group-interaction', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.group:hover .${className}, .group:focus .${className}, .group:active .${className}`;
        });
      });
    }
  ],
}

export default config;
