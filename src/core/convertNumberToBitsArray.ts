import { convertNumberToBits } from '..';

interface Options {
  maxLength?: number;
}

export default function convertNumberToBitsArray(num: number, options: Options = {}): number[] {
  return convertNumberToBits(num, options).split('').map(b => parseInt(b));
}