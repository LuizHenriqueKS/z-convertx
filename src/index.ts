import append from './core/append';
import appendStart from './core/appendStart';
import appendEnd from './core/appendEnd';
import Direction from './core/Direction';

import convertTextToBits from './core/convertTextToBits';
import convertTextToBitsArray from './core/convertTextToBitsArray';
import convertTextToBitsMatrix from './core/convertTextToBitsMatrix';

import convertBitsMatrixToText from './core/convertBitsMatrixToText';
import convertBitsArrayToText from './core/convertBitsArrayToText';
import convertBitsToText from './core/convertBitsToText';

import convertNumberToBits from './core/convertNumberToBits';
import convertNumberToBitsArray from './core/convertNumberToBitsArray';

import convertNumberToBytesArray from './core/convertNumberToBytesArray';
import convertBytesArrayToNumber from './core/convertBytesArrayToNumber';

module.exports = {
  append,
  appendStart,
  appendEnd,
  Direction,

  convertTextToBits,
  convertTextToBitsArray,
  convertTextToBitsMatrix,

  convertBitsMatrixToText,
  convertBitsArrayToText,
  convertBitsToText,

  convertNumberToBits,
  convertNumberToBitsArray,

  convertNumberToBytesArray,
  convertBytesArrayToNumber
};

export { default as append } from './core/append';
export { default as appendStart } from './core/appendStart';
export { default as appendEnd } from './core/appendEnd';
export { default as Direction } from './core/Direction';

export { default as convertTextToBits } from './core/convertTextToBits';
export { default as convertTextToBitsArray } from './core/convertTextToBitsArray';
export { default as convertTextToBitsMatrix } from './core/convertTextToBitsMatrix';

export { default as convertBitsMatrixToText } from './core/convertBitsMatrixToText';
export { default as convertBitsArrayToText } from './core/convertBitsArrayToText';
export { default as convertBitsToText } from './core/convertBitsToText';

export { default as convertNumberToBits } from './core/convertNumberToBits';
export { default as convertNumberToBitsArray } from './core/convertNumberToBitsArray';

export { default as convertNumberToBytesArray } from './core/convertNumberToBytesArray';
export { default as convertBytesArrayToNumber } from './core/convertBytesArrayToNumber';