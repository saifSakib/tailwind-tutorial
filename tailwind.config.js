/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1920px',
      'sm-only': {'max': '767px'},
      'md-only': {'min': '768px', 'max': '1023px'},
      'lg-only': {'min': '1024px'},
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
      },
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen sm-only': {
            paddingLeft : '20px',
            paddingRight : '20px',

          },
          '@screen md-only': {
            paddingLeft : '20px',
            paddingRight : '20px',

          },
          '@screen lg': {
            paddingLeft : '20px',
            paddingRight : '20px',

          },
          '@screen xl': {
            paddingLeft : '0px',
            paddingRight : '0px',
            maxWidth: '1111px',
          },
        }
      })
    }
  ],
}

