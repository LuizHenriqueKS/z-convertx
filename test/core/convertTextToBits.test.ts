import { convertTextToBits } from '../../src';

it('should convert text to bits', () => {
  const text = 'asdf';
  const result = convertTextToBits(text);
  const expected = ['1100001', '1110011', '1100100', '1100110'];
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits (16 bits by char)', () => {
  const text = 'asdf';
  const result = convertTextToBits(text, { bitsByChar: 16 });
  const expected = ['0000000001100001', '0000000001110011', '0000000001100100', '0000000001100110'];
  expect(result).toStrictEqual(expected);
});

it('should convert text to bits (16 bits by char) [5 characters]', () => {
  const text = 'asdf';
  const result = convertTextToBits(text, { bitsByChar: 16, maxLength: 5 });
  const expected = ['0000000001100001', '0000000001110011', '0000000001100100', '0000000001100110', '0000000000000000'];
  expect(result).toStrictEqual(expected);
});