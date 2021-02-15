import { appendStart } from '..';

interface Options {
  bitsByChar?: number;
  maxLength?: number;
}

export default function convertTextToBits(text: string, options: Options = {}): string[] {
  const result = convertOnlyTextToBits(text, options);
  appendRest(result, options);
  return result;
};

function appendRest(result: string[], options: Options = {}) {
  if (options.maxLength) {
    while (result.length < options.maxLength) {
      result.push(appendStart({
        text: '',
        pattern: '0',
        maxLength: options.bitsByChar || 0
      }));
    }
  }
}

function convertOnlyTextToBits(text: string, options: Options = {}): string[] {
  const result = [];
  for (let i = 0; i < text.length; i++) {
    let bits = text.charCodeAt(i).toString(2);
    if (options.bitsByChar) {
      bits = appendStart({
        text: bits,
        pattern: '0',
        maxLength: options.bitsByChar | 0
      });
    }
    result.push(bits);
  }
  return result;
}