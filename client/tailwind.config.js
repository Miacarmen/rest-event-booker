/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6419E6',

          secondary: '#D926A9',

          accent: '#1FB2A6',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#312e81',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
