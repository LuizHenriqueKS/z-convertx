import { Direction } from '..';

interface Options {
  text: string;
  pattern: string;
  maxLength: number;
  direction: Direction;
}

export default function append(options: Options): string {
  let result = options.text;
  while (result.length < options.maxLength) {
    if (options.direction === Direction.START) {
      result = options.pattern + result;
    } else {
      result += options.pattern;
    }
  }
  if (result.length > options.maxLength) {
    result = result.substring(0, options.maxLength);
  }
  return result;
}