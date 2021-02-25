import { convertNumberToBytesArray } from "../../src";

it('should convert number to bytes array', () => {
  expect(convertNumberToBytesArray(1)).toStrictEqual([1]);
  expect(convertNumberToBytesArray(512)).toStrictEqual([0, 2]);
  expect(convertNumberToBytesArray(513)).toStrictEqual([1, 2]);
  expect(convertNumberToBytesArray(513, { maxLength: 4 })).toStrictEqual([1, 2, 0, 0]);
});