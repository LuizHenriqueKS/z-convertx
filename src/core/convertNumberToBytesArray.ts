import appendEnd from './appendEnd';

interface Options {
  maxLength?: number;
}

function convertNumberToBytesArray(num: number, options?: Options): number[] {
  const result = [];
  const maxLength = options?.maxLength;
  let current = num;
  while (current > 0) {
    const byte = current & 0xFF;
    current = current >> 8;
    result.push(byte);
  }
  if (maxLength) {
    for (let i = result.length; i < maxLength; i++) {
      result.push(0);
    }
  }
  return result;
}

export default convertNumberToBytesArray;