export default function convertBitsMatrixToText(bits: number[][]): string {
  let result = '';
  for (const array of bits) {
    const bitsStr = array.map(b => `${b}`).reduce((a, b) => a + b);
    result += String.fromCharCode(parseInt(bitsStr, 2));
  }
  return result;
};