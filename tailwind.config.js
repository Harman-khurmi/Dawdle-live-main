/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Open Sans to the font stack
        libre: ['Libre Baskerville', 'serif'], // Add Open Sans to the font stack
      },
      screens: {
        'xs': { 'max': '374px' },
      },
      boxShadow: {
        'buttonHover': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)', // Customize shadow
      },
      spacing: {
        '100': '24rem',
        '120': '30rem',
        '128': '32rem',
        '132': '36rem',
        '134': '34rem',
        '136': '40rem',
        '140': '44rem',
        '144': '48rem',
        '148': '52rem',
        '156': '56rem',
        '256': '85rem',
      },
      colors: {
        brandPrimary: '#625CF9',
        brandSecondary: '#2B2844',
        bgWhite: '#F3F3F3',
      },
    },
  },
  plugins: [],
}

