import { append } from '..';

interface Options {
  pattern: string;
  text: string;
  maxLength: number;
}

export default function appendEnd(options: Options): string {
  return append({
    text: options.text,
    pattern: options.pattern,
    maxLength: options.maxLength,
    direction: 1
  });
}