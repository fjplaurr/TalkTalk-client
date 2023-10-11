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

export { setSpace };
