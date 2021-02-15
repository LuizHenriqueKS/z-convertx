import { convertBitsArrayToText, convertTextToBitsArray } from '../../src';

it('should convert bits array to bits text (16 bits by char)', () => {
  const expected = 'asdf';
  const bits = convertTextToBitsArray(expected, { bitsByChar: 16 });
  const result = convertBitsArrayToText(bits, 16);
  expect(result).toStrictEqual(expected);
});

it('should convert bits array to text (16 bits by char) [5 characters]', () => {
  const expected = 'asdf';
  const bits = convertTextToBitsArray(expected, { bitsByChar: 16, maxLength: 5 });
  const result = convertBitsArrayToText(bits, 16).replace("\0", "");
  expect(result).toStrictEqual(expected);
});