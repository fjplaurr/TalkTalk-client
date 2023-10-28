type MultipleOf4Ending = `${string}${
  | '-8'
  | '-4'
  | '0'
  | '4'
  | '8'
  | '00'
  | '12'
  | '16'
  | '20'
  | '32'
  | '36'
  | '40'
  | '52'
  | '56'
  | '60'
  | '72'
  | '76'
  | '80'
  | '92'
  | '96'}`;

type MultipleOfFour<T extends number> = `${T}` extends MultipleOf4Ending
  ? T
  : 0;

const setSpace = <T extends number>(t: MultipleOfFour<T>) => `${t}px`;

const colors = {
  lightBlue: '#dbf2fe',
  midBlue: '#0778AE',
  darkBlue: '#066390',
  lightRed: '#fde3df',
  midRed: '#ed3f25',
  darkRed: '#c6321e',
  lightPink: '#ff68a7',
  midPink: '#f00064',
  darkPink: '#ce0056',
  white: '#fff',
  lightGray: '#ebebf0',
  midGray: '#c4c4c8',
  darkGray: '#919196',
  lightBlack: '#555',
  midBlack: '#2b2b2b',
  darkBlack: '#000',
  darkWhite: '#FBFBFB',
};

const fontSizes = {
  small: '0.75rem',
  regular: '1rem',
  large: '1.5rem',
  extralarge: '2rem',
  extraextralarge: '3rem',
};

const lineHeights = {
  small: '1.25rem',
  regular: '1.5rem',
  large: '2.25rem',
  extralarge: '3rem',
  extraextralarge: '4.5rem',
};

const fontWeights = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

const minimumSpacing = '4px';
const minimumBorderRadius = '4px';
const fontFamily = 'lato, sans-serif';

type ColorKeys = keyof typeof colors;

export default {
  setSpace,
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  minimumSpacing,
  minimumBorderRadius,
  fontFamily,
};

export type { ColorKeys };
