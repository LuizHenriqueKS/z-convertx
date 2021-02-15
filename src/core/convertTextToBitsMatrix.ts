import convertTextToBits from "./convertTextToBits";

interface Options {
  bitsByChar?: number;
  maxLength?: number;
}

export default function convertTextToBitsMatrix(text: string, options: Options = {}): number[][] {
  return convertTextToBits(text, options)
    .map(bits => bits.split('').map(v => parseInt(v)));
};