import { convertTextToBitsMatrix, convertBitsMatrixToText } from '../../src';

it('should convert text to bits matrix', () => {
  const expected = 'asdf';
  const bits = convertTextToBitsMatrix(expected);
  const result = convertBitsMatrixToText(bits);
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits matrix (16 bits by char)', () => {
  const expected = 'asdf';
  const bits = convertTextToBitsMatrix(expected, { bitsByChar: 16 });
  const result = convertBitsMatrixToText(bits);
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits matrix (16 bits by char) [5 characters]', () => {
  const expected = 'asdf';
  const bits = convertTextToBitsMatrix(expected, { bitsByChar: 16, maxLength: 5 });
  const result = convertBitsMatrixToText(bits).replace("\0", "");
  expect(result).toStrictEqual(expected);
});