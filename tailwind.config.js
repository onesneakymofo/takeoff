module.exports = {
  purge: [],
  corePlugins: {
    // fontWeight not used, different font variants controlled by fontFamily
    fontWeight: false,
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Moderat', 'sans-serif'],
        light: ['Moderat-Light', 'sans-serif'],
        regular: ['Moderat', 'sans-serif'],
        medium: ['Moderat-Medium', 'sans-serif'],
        bold: ['Moderat-Bold', 'sans-serif'],
        'mono-medium': ['Moderat-Mono-Medium', 'sans-serif'],
        'mono-bold': ['Moderat-Mono-Bold', 'sans-serif'],
      },
      colors: {
        white: {
          1: 'rgba(255, 255, 255, 0.01)',
          2: 'rgba(255, 255, 255, 0.02)',
          3: 'rgba(255, 255, 255, 0.03)',
          4: 'rgba(255, 255, 255, 0.04)',
          5: 'rgba(255, 255, 255, 0.05)',
          6: 'rgba(255, 255, 255, 0.06)',
          7: 'rgba(255, 255, 255, 0.07)',
          8: 'rgba(255, 255, 255, 0.08)',
          9: 'rgba(255, 255, 255, 0.09)',
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          40: 'rgba(255, 255, 255, 0.4)',
          50: 'rgba(255, 255, 255, 0.5)',
          60: 'rgba(255, 255, 255, 0.6)',
          70: 'rgba(255, 255, 255, 0.7)',
          80: 'rgba(255, 255, 255, 0.8)',
          90: 'rgba(255, 255, 255, 0.9)',
          100: 'rgba(255, 255, 255, 1)',
          DEFAULT: '#ffffff',
        },
        black: {
          1: 'rgba(0, 0, 0, 0.01)',
          2: 'rgba(0, 0, 0, 0.02)',
          3: 'rgba(0, 0, 0, 0.03)',
          4: 'rgba(0, 0, 0, 0.04)',
          5: 'rgba(0, 0, 0, 0.05)',
          6: 'rgba(0, 0, 0, 0.06)',
          7: 'rgba(0, 0, 0, 0.07)',
          8: 'rgba(0, 0, 0, 0.08)',
          9: 'rgba(0, 0, 0, 0.09)',
          10: 'rgba(0, 0, 0, 0.1)',
          20: 'rgba(0, 0, 0, 0.2)',
          30: 'rgba(0, 0, 0, 0.3)',
          40: 'rgba(0, 0, 0, 0.4)',
          50: 'rgba(0, 0, 0, 0.5)',
          60: 'rgba(0, 0, 0, 0.6)',
          70: 'rgba(0, 0, 0, 0.7)',
          80: 'rgba(0, 0, 0, 0.8)',
          90: 'rgba(0, 0, 0, 0.9)',
          a: '#4f4f4f',
          b: '#464141',
          c: '#8C8684',
          d: '#898280',
          e: '#696362',
          f: '#232020',
          g: '#333333',
          h: '#1a1a1a',
          DEFAULT: '#000000',
        },
        blue: { DEFAULT: '#16354b' },
        grey: {
          1000: '#000000',
          900: '#1B1918',
          800: '#2E2B29',
          700: '#55524E',
          600: '#787573',
          500: '#A7A6A4',
          400: '#CECDCA',
          300: '#E7E6E4',
          200: '#F3F3F2',
          100: '#FAFAF9',
        },
        gray: {
          a: '#f2f2f2',
          b: '#bdbdbd',
          c: '#828282',
          d: '#e0e0e0',
          e: '#c7c1bc',
          f: '#605a59',
          g: '#696362',
          h: '#484848',
          i: '#B3AEAA',
          j: '#DDD7D3',
          k: '#F0F0F0',
          l: '#C4C4C4',
          m: '#fcfaf6',
          n: '#706f6e',
          o: '#f7f7f7',
          p: '#D0DBD9',
        },
        green: {
          900: '#032A29',
          800: '#194240',
          700: '#08786C',
          600: '#209987',
          500: '#42BAA9',
          400: '#89D6C7',
          300: '#D7F6E7',
          200: '#E9F3EE',
          100: '#F4FBF6',
          a: '#154a40',
          b: '#eaf8f3',
          c: '#0c5a56',
          d: '#80e8e0',
          e: '#0F8573',
          f: '#25A28A',
          g: '#E8F9F1',
          h: '#B6DDD6',
        },
        beige: {
          DEFAULT: '#fdfbf7',
          a: '#f4ecdA',
        },
        brown: {
          100: '#FFFBF7',
          200: '#FBEDE4',
          300: '#F6E3D7',
          800: '#3F2923',
        },
        orange: {
          100: '#FFF8F7',
          200: '#FCEEEA',
          300: '#FFE4DA',
          400: '#FFAB99',
          500: '#FC7045',
          600: '#EE533D',
          700: '#C62D2C',
          800: '#5D2724',
          900: '#3A1414',
          a: '#ff6300',
          b: '#fc6a2c',
          c: '#D28937',
          DEFAULT: '#FD6A2C',
        },
        yellow: {
          a: '#eee438',
          100: '#FFFEF5',
          200: '#FDF6E3',
          300: '#FEF0D7',
          400: '#FADF70',
          500: '#FFD426',
          600: '#FA9A12',
          700: '#AB5706',
          800: '#5C3519',
          900: '#302013',
        },
        confirmation: 'rgba(21, 74, 64, 1)',
        loading: 'rgb(224 224 224)',
      },
      spacing: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        18: '4.5rem',
        30: '7.5rem',
        69: '17.25rem',
        82: '20.5rem',
        90: '22.5rem',
        95: '23.75rem',
        98: '24.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        150: '37.5rem',
        160: '40rem',
        195: '48.75rem',
        220: '55rem',
      },
      backdropFilter: {
        xs: 'blur(2px)',
      },
      flex: {
        0: '0',
        '1/6': '1 0 16%',
        '1/5': '1 0 20%',
        '1/4': '1 0 25%',
        '1/3': '1 0 33%',
        '1/2': '1 0 50%',
      },
      fontSize: {
        'display-xl': '6rem',
        'display-lg': '5rem',
        'display-md': '3.5rem',
        'display-sm': '2rem',

        'header-xxl': '4rem',
        'header-xl': '3rem',
        'header-lg': '2rem',
        'header-md': '1.5rem',
        'header-sm': '1.25rem',
        'header-xs': '1rem',
        'header-xxs': '0.875rem',

        'p-lg': '1.125rem',
        'p-md': '1rem',
        'p-sm': '0.875rem',
        'p-xs': '0.75rem',

        'label-lg': '1.125rem',
        'label-md': '1rem',
        'label-sm': '0.875rem',
        'label-xs': '0.75rem',
        xxs: '8px',
        xs: '10px',
        s: '12px',
        s2: '16px',
        s3: '21.328px',
        '2-base': '2rem',
        '10xl': '1.375rem',
        '11xl': '1.777rem',
        '3xxl': '1.625rem',
      },
      lineHeight: {
        100: '100%',
        110: '110%',
        120: '120%',
        130: '130%',
        140: '140%',
        150: '150%',
        160: '160%',
        180: '180%',
        200: '200%',
      },

      width: (theme) => ({
        0: '0',
        auto: 'auto',
        'fit-content': 'fit-content',
        ...theme('spacing'),
        full: '100%',
        screen: '100vw',
      }),
      minWidth: (theme) => ({
        0: '0',
        ...theme('spacing'),
        full: '100%',
        screen: '100vw',
      }),
      maxWidth: (theme) => ({
        none: 'none',
        ...theme('spacing'),
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        screen: '100vw',
      }),
      height: (theme) => ({
        0: '0',
        ...theme('spacing'),
        'fit-content': 'fit-content',
        full: '100%',
        screen: 'calc(var(--vh) * 100)',
        'full-vh': '100vh',
      }),
      minHeight: (theme) => ({
        0: '0',
        ...theme('spacing'),
        full: '100%',
        screen: 'calc(var(--vh) * 100)',
      }),
      maxHeight: (theme) => ({
        none: 'none',
        ...theme('spacing'),
        full: '100%',
        screen: 'calc(var(--vh) * 100)',
      }),
      zIndex: {
        1: '1',
        behind: '-1',
        'behind-2': '-2',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.7, 0, 0.84, 0)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
        1200: '1200ms',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
    screens: {
      xxs: '320px',
      xs: '432px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',

      // TODO: consider this approach moving forward. Needed for `max-width` media-queries, which are rare
      mobile: [
        {
          max: '767px',
        },
      ],
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        // calculated for content max-width of 1236px + padding of 1.5rem -> calc(1236px + 1.5rem * 2)
        xl: '1284px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      padding: ['first', 'last'],
      margin: ['first', 'last'],
      grayscale: ['hover'],
    },
  },
  plugins: [
    function ({ e, addUtilities, addComponents, theme }) {
      const colors = theme('colors')
      const spacing = theme('spacing')

      const darkenUtility = generateClassWithTailwindAttributes(e, darken, theme)
      const mobileOverscrollUtility = generateClassWithTailwindAttributes(e, mobileOverscroll, spacing)
      const tabletOverscrollUtility = generateClassWithTailwindAttributes(e, tabletOverscroll, spacing)

      const linkComponents = generateLinkClasses(theme)

      addUtilities([darkenUtility, mobileOverscrollUtility, tabletOverscrollUtility], ['hover', 'focus', 'active'])
      addComponents(linkComponents)
    },
  ],
}

function generateLinkClasses(theme) {
  const linkVariants = [
    { color: 'green', primary: '700', hover: '500' },
    { color: 'grey', primary: '500', hover: '700' },
    { color: 'grey', primary: '600', hover: '800' },
  ]

  return linkVariants.map((link) => createLinkClass(link, theme))
}

function createLinkClass({ color, primary, hover }, theme) {
  const colors = theme('colors')
  const transitionTiming = theme('transitionTimingFunction')
  const primaryColor = colors[color][primary]
  const hoverColor = colors[color][hover]
  const key = `.link-${color}-${primary}`

  return {
    [key]: {
      display: 'inline',
      fontFamily: 'Moderat-Bold',
      cursor: 'pointer',
      color: primaryColor,
      transition: `color 400ms ${transitionTiming.out}`,
      '&:hover': {
        color: hoverColor,
      },
      '&:focus-visible': {
        color: hoverColor,
        outline: 'none',
      },
      '&:active': {
        color: hoverColor,
      },
    },
  }
}

const darken = {
  prefix: '.darken',
  getProperties: (color) => ({
    '&::after': {
      content: `''`,
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      'background-color': color,
    },
  }),
}

const mobileOverscroll = {
  prefix: '.mobile-overscroll',
  getProperties: (spacing) => ({
    '@media (max-width: 767px)': {
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      overflowX: 'auto',
      '&::after': {
        content: `''`,
        flex: `0 0 ${spacing}`,
      },
      '> *:first-child': {
        marginLeft: `${spacing}`,
      },
      '> *:last-child': {
        marginRight: '0',
      },
    },
  }),
}

const tabletOverscroll = {
  prefix: '.tablet-overscroll',
  getProperties: (spacing) => ({
    '@media (max-width: 1023px)': {
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      overflowX: 'auto',
      '&::after': {
        content: `''`,
        flex: `0 0 ${spacing}`,
      },
      '> *:first-child': {
        marginLeft: `${spacing}`,
      },
      '> *:last-child': {
        marginRight: '0',
      },
    },
  }),
}

// use to generate class with tailwind theme suffix such as `-green-500`, `-4`, etc
function generateClassWithTailwindAttributes(e, classDetails, tailwindAttribute) {
  const { prefix, getProperties } = classDetails

  return Object.keys(tailwindAttribute).reduce((acc, key) => {
    const isAttributeValidValue =
      typeof tailwindAttribute[key] === 'string' || typeof tailwindAttribute[key] === 'number'

    if (isAttributeValidValue) {
      return {
        ...acc,
        [`${prefix}-${e(key)}`]: getProperties(tailwindAttribute[key]),
      }
    }

    // value is an object of attributes. ie colors object containing inner variants/attributes
    const classWithAppendedPrefix = { ...classDetails, prefix: `${prefix}-${e(key)}` }
    const innerAttributes = generateClassWithTailwindAttributes(e, classWithAppendedPrefix, tailwindAttribute[key])

    return {
      ...acc,
      ...innerAttributes,
    }
  }, {})
}
