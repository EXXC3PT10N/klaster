module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#23c878",

          "secondary": "#08aeea",

          "accent": "#1FB2A6",

          "base-100": "#fff",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  theme: {
    borderRadius: {
      DEFAULT: '0.625rem',
      sm: '5px',
      none: '0px',
    },
    boxShadow: {
      'sm' : '0px 0px 12px rgba(0, 0, 0, 0.1)',
    },
    colors: {
      // Base colors
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      // Custom Colors
      grey: {
        DEFAULT: "#D6D6D6",
        light: "rgba(217, 217, 217, 0.2)",
        dark: "#656565",
        '100': "#EFEFEF",
        '200': "#DFDFDF",
      },
      blue: {
        DEFAULT: "#08AEEA",
        dark: "#302B3F",
      },
      green: {
        DEFAULT: '#23C878',
      },
      yellow: {
        DEFAULT: '#EBB51E',
      }
    },
    fontFamily: {
      'fira-sans': ['"Fira Sans"', 'sans-serif'],

    },
    letterSpacing: {
      normal: '0',
      wide: '.02em',
      wider: '.05em',
    },
    extend: {
      fontSize: {
        xxs: '0.675rem',
        'head': '3.125rem',
        'subhead-small': '2rem',
        'subhead-big': '2.375rem',
        'subhead-smaller': '1.75rem',
      },
      lineHeight: {
        tighter: '1.125',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1920px',
    },
  },
  plugins: [

    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '912px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@screen md': {
            maxWidth: '752px',
          },
          '@screen lg': {
            maxWidth: '950px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1200px',
          },
        }
      })
    },
    require("daisyui"),
  ],
}
