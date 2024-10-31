module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Poppins, sans-serif',
      },
      colors: {
        purplekenji: {
          100: "#e8daef",
          200: "#d2b4de",
          300: "#bb8fce",
          400: "#a569bd",
          500: "#8e44ad",
          600: "#72368a",
          700: "#552968",
          800: "#391b45",
          900: "#1c0e23"
},
        sun: {
          500: '#f9a826',
        }
      },
      screens: {
        xs: '430px',
      },
      keyframes: {
        smSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-418%)' },
        },
        mdSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-247%)' },
        },
        lgSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-138%)' },
        },
        xlSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-118%)' },
        },
        
        smReverseSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(418%)' },
        },
        mdReverseSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(247%)' },
        },
        lgReverseSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(138%)' },
        },
        xlReverseSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(118%)' },
        },
      },
      animation: {
        smSlide: 'smSlide 60s linear infinite',
        mdSlide: 'mdSlide 60s linear infinite',
        lgSlide: 'lgSlide 60s linear infinite',
        xlSlide: 'xlSlide 60s linear infinite',

        smReverseSlide: 'smReverseSlide 60s linear infinite',
        mdReverseSlide: 'mdReverseSlide 60s linear infinite',
        lgReverseSlide: 'lgReverseSlide 60s linear infinite',
        xlReverseSlide: 'xlReverseSlide 60s linear infinite',

      },
      backgroundImage: {
        result_hero_image: 'url(/result-hero-image.jpeg)'
      }
    },
  },
  plugins: [],
}