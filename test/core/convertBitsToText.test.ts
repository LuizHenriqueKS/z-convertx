import { convertTextToBits } from '../../src';
import convertBitsToText from '../../src/core/convertBitsToText';

it('should convert bits to text', () => {
  const expected = 'asdf';
  const bits = convertTextToBits(expected);
  const result = convertBitsToText(bits);
  expect(result).toStrictEqual(expected);
});

it('should convert bits to text (16 bits by char)', () => {
  const expected = 'asdf';
  const bits = convertTextToBits(expected, { bitsByChar: 16 });
  const result = convertBitsToText(bits);
  expect(result).toStrictEqual(expected);
});

it('should convert bits to text (16 bits by char) [5 characters]', () => {
  const expected = 'asdf';
  const bits = convertTextToBits(expected, { bitsByChar: 16, maxLength: 5 });
  const result = convertBitsToText(bits).replace('\0', '');
  expect(result).toStrictEqual(expected);
});