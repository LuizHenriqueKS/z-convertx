import { convertTextToBitsArray } from '../../src';

it('should convert text to bits array', () => {
  const text = 'asdf';
  const result = convertTextToBitsArray(text);
  const expected = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0];
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits array (16 bits by char)', () => {
  const text = 'asdf';
  const result = convertTextToBitsArray(text, { bitsByChar: 16 });
  const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0];
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits array (16 bits by char) [5 characters]', () => {
  const text = 'asdf';
  const result = convertTextToBitsArray(text, { bitsByChar: 16, maxLength: 5 });
  const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  expect(result).toStrictEqual(expected);
});