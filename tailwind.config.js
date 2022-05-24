module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {},
  },

  // DaisyUI
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#EEB76B',
          secondary: '#082032',
          accent: '#2C394B',
          neutral: '#334756',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
