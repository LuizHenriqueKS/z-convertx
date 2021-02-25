import { convertBytesArrayToNumber, convertNumberToBytesArray } from "../../src";

it('should convert bytes array to number', () => {
  expect(convertBytesArrayToNumber([1])).toBe(1);
  expect(convertBytesArrayToNumber([0, 2])).toBe(512);
  expect(convertBytesArrayToNumber([1, 2])).toBe(513);
  expect(convertBytesArrayToNumber([1, 2, 0, 0])).toBe(513);

  const number = 1234;
  expect(convertBytesArrayToNumber(convertNumberToBytesArray(number))).toBe(number);
});