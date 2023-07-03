import { darken, lighten } from "polished";

export const lightTheme = {
  colors: {
    // variables
    main500: '#e7731b',
    second500: '#e5312e',
    title: '#191a1c',
    titleContrast: '#e4e8f1',
    text: '#303336',
    textContrast: '#dfe4ef',
    label: '#797e84',
    buttonText: '#f1f5f9',

    // backgrounds
    bodyBg: '#d8dfee',
    shapeBg: '#e2e8f5',
    containerBg: '#e6ecf9',
    inputBg: '#ccd2df',
    fadeBg: 'rgba(30, 30, 30, 0.3)',

    // colors
    white: '#fff',
    black: '#080808',
    green500: '#10955F',
    yellow500: '#f0cd20',
    orange500: '#ffa323',
    red500: '#e52e4d',
    blue500: '#3089e9',
    gray300: '#959cad',
    gray500: '#7a808e',
    gray700: '#3a3e48',
  },
  effects: {
    // shadows
    shadowTop: '0 -1px 4px rgba(0, 0, 0, 0.2)',
    shadowBottom: '0 1px 4px rgba(0, 0, 0, 0.2)',
    shadowAround: '0px 0px 5px 2px rgba(0, 0, 0, 0.2)',

    // hover elements
    hoverLight: (color: string) => {
      return lighten(0.04, color)
    },
    hoverDark: (color: string) => {
      return darken(0.04, color)
    },
  }
};

export const darkTheme = {
  colors: {
    // variables
    main500: '#fb8835',
    second500: '#f24f4c',
    title: '#e6ebf6',
    titleContrast: '#191a1c',
    text: '#cdd2df',
    textContrast: '#212325',
    label: '#7e8188',
    buttonText: '#26282b',

    // backgrounds
    bodyBg: '#131416',
    shapeBg: '#1f2022',
    containerBg: '#26282b',
    inputBg: '#3b3d41',
    fadeBg: 'rgba(10, 10, 10, 0.4)',

    // colors
    white: '#e8ecf8',
    black: '#080808',
    green500: '#49b087',
    yellow500: '#f2c318',
    orange500: '#f69438',
    red500: '#f15757',
    blue500: '#508eec',
    gray300: '#959cad',
    gray500: '#7a808e',
    gray700: '#3a3e48',
  },
  effects: {
    // shadows
    shadowTop: '0 -1px 4px rgba(0, 0, 0, 0.4)',
    shadowBottom: '0 1px 4px rgba(0, 0, 0, 0.4)',
    shadowAround: '0px 0px 5px 2px rgba(0, 0, 0, 0.4)',

    // hover elements
    hoverLight: (color: string) => {
      return lighten(0.04, color)
    },
    hoverDark: (color: string) => {
      return darken(0.04, color)
    },
  }
};
