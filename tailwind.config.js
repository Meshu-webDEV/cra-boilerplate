const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        backgroundDarker: '#0b0d13',
        backgroundDark: '#151920',
        background: '#1a1f27',
      },
      light: {
        backgroundLighter: '#FFFFFF',
        backgroundLight: '#ECECEC',
        background: '#E0E0E0',
      },
      secondary: {
        light: '#07b85c',
        dark: '#058542',
      },
      primary: {
        light: '#f10041',
        dark: '#df003c',
      },
      whites: {
        dark: '#C3C3C3',
        light: '#FFFFFF',
      },
      blacks: {
        dark: '#0B0D13',
        light: '#171C24',
        lighter: '#1e242b',
      },
      warning: '#fdfd43',
      info: '#339FDE',
      success: '#4ACE5B',
    },
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0px 0px 11px 8px #00000024',
        'shadow-left': '-4px 1px 11px 12px',
        'shadow-top': '0px -25px 35px 0px',
        'btn': '0px 2px 4px 3px',
      },
      fontSize: {
        'xxs': '0.62rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in-.1': 'fadeIn ease-in 0.10s;',
        'fade-in-.25': 'fadeIn ease-in 0.25s;',
        'fade-in-.5': 'fadeIn ease-in 0.500s;',
      },
      height: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/1.1': '90%',
        '95': '95%',
      },
      width: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/1.1': '90%',
        '95': '95%',
      },
      spacing: {
        '98': '28rem',
        '110': '32rem',
        '100': '36rem',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.75rem',
      'full': '9999px',
    },
  },
  variants: {
    extend: {
      ringWidth: ['dark', 'focus'],
      ringColor: ['dark', 'focus'],
      ringOpacity: ['dark', 'focus'],
      ringOffsetWidth: ['dark', 'focus'],
      borderColor: ['dark', 'focus'],
      brightness: ['hover'],
      hueRotate: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
