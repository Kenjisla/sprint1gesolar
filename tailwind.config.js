module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sun: {
          500: '#f9a826'
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

      }
    },
  },
  plugins: [],
}