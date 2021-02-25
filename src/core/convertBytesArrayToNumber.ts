import appendEnd from './appendEnd';

function convertBytesArrayToNumber(bytesArray: number[]): number {
  let result = 0;
  for (let i = bytesArray.length - 1; i >= 0; i--) {
    if (i < bytesArray.length - 1) {
      result = result << 8;
    }
    result |= bytesArray[i];
  }
  return result;
}

export default convertBytesArrayToNumber;