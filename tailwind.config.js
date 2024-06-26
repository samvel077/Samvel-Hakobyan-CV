const { environment } = require("./src/environments/environment");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,json}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['avenir-next', 'sans-serif'],
      },
      colors: {
        'typography-1': 'var(--typography-1)',
        'typography-2': 'var(--typography-2)',
        'typography-3': 'var(--typography-3)',
        'typography-4': 'var(--typography-4)',
      },
      backgroundImage: {
        page: `url(${environment.BASE_URL}assets/images/background.webp)`,
        'page-dark': `url(${environment.BASE_URL}assets/images/background-dark.webp)`,
      },
      minHeight: {
        container: '1268px',
      },
      backgroundSize: {
        '100%': '100%',
      },
      width: {
        'wrapper-100%': 'calc(100% - 24px)',
        'wrapper-100%-sm': 'calc(100% - 80px)',
        'picture-before-100%': 'calc(100% + 12px)',
        'picture-before-100%-sm': 'calc(100% + 40px)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
