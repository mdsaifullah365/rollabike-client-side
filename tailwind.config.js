module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },

  // DaisyUI
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#fdb819',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#a9a9a9',
          'base-100': '#ffffff',
          dark: '#212121',
          medium: '#81858c',
          light: '#e1e1e1',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
