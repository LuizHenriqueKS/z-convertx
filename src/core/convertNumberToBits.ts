import { appendStart } from '..';

interface Options {
  maxLength?: number;
}

export default function convertNumberToBits(num: number, options: Options = {}): string {
  const text = num.toString(2);
  if (options.maxLength) {
    return appendStart({
      text,
      pattern: '0',
      maxLength: options.maxLength
    })
  }
  return text;
}