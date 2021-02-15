import { convertTextToBitsMatrix } from "..";

interface Options {
  bitsByChar?: number;
  maxLength?: number;
}

export default function convertTextToBitsArray(text: string, options: Options = {}): number[] {
  const result: number[] = [];
  for (const bitsArray of convertTextToBitsMatrix(text, options)) {
    for (const bit of bitsArray) {
      result.push(bit);
    }
  }
  return result;
};