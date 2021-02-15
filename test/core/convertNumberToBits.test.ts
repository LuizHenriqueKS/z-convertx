import { convertNumberToBits } from "../../src";

it('should convert number to bits', () => {
  const num = 2;
  const expected = '10';
  const result = convertNumberToBits(num);
  expect(result).toBe(expected);
});

it('should convert number to bits [maxLength = 3]', () => {
  const num = 2;
  const expected = '010';
  const result = convertNumberToBits(num, { maxLength: 3 });
  expect(result).toBe(expected);
});

