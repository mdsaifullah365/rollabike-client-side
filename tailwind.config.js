import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {},
  },

  // DaisyUI
  plugins: [daisyui],
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
