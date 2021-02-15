export default function convertBitsArrayToText(bits: number[], bitsByChar: number): string {
  let result = '';
  let bitsStr = '';
  for (let i = 0; i < bits.length; i++) {
    bitsStr += `${bits[i]}`;
    if (bitsStr.length >= bitsByChar) {
      result += String.fromCharCode(parseInt(bitsStr, 2));
      bitsStr = '';
    }
  }
  return result;
};