import { convertTextToBitsMatrix } from '../../src';

it('should convert text to bits matrix', () => {
  const text = 'asdf';
  const result = convertTextToBitsMatrix(text);
  const expected = [[1, 1, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 0, 0], [1, 1, 0, 0, 1, 1, 0]];
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits matrix (16 bits by char)', () => {
  const text = 'asdf';
  const result = convertTextToBitsMatrix(text, { bitsByChar: 16 });
  const expected = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0]];
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits matrix (16 bits by char) [5 characters]', () => {
  const text = 'asdf';
  const result = convertTextToBitsMatrix(text, { bitsByChar: 16, maxLength: 5 });
  const expected = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  expect(result).toStrictEqual(expected);
});