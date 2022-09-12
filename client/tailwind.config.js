/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#D926A9',

          // 'primary-focus': '#ff77e9',

          secondary: '#ff77e9',

          accent: '#1FB2A6',

          'accent-focus': '#3ab7bf',

          neutral: '#3730a3',

          'base-100': '#2A303C',

          'base-200': '#191D24',

          'base-300': '#ffffff',

          info: '#3ABFF8',

          success: '#78dcca',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [require('daisyui')],
};
