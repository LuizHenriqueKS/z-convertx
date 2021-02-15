import { append } from '..';

interface Options {
  pattern: string;
  text: string;
  maxLength: number;
}

export default function appendStart(options: Options): string {
  return append({
    text: options.text,
    pattern: options.pattern,
    maxLength: options.maxLength,
    direction: 0
  });
}