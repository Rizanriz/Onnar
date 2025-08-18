// tailwind.config.js

/** @type {Config} */
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
  plugins: [],
}

export default config
