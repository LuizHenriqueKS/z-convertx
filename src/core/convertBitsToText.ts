export default function convertBitsToText(bits: string[]): string {
  let result = "";
  for (const str of bits) {
    const byte = parseInt(str, 2);
    result += String.fromCharCode(byte);
  }
  return result;
};