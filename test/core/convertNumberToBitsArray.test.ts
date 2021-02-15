import { convertNumberToBitsArray } from "../../src";

it('should convert number to bits array', () => {
  const num = 2;
  const expected = [1, 0];
  const result = convertNumberToBitsArray(num);
  expect(result).toStrictEqual(expected);
});

it('should convert number to bits array [maxLength = 3]', () => {
  const num = 2;
  const expected = [0, 1, 0];
  const result = convertNumberToBitsArray(num, { maxLength: 3 });
  expect(result).toStrictEqual(expected);
});

