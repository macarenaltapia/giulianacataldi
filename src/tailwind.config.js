const { colors } = require('tailwindcss/defaultTheme');
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        colors: {
          red: {
            ...colors.red,
            '600': '#db1c15',
          }
        } ,
      },
    },
    variants: {},
    plugins: [],
  };