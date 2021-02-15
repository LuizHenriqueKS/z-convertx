# z-convertx
Library to perform conversions

# Installation

```
npm i z-convertx
```

# Usage

## Javascript

```javascript
const convertx = require('z-convertx');
```

## Typescript

```typescript
import convertx from 'z-convertx';
```

# Summary 

[append](#append)
[appendStart](#appendStart)
[appendEnd](#appendEnd)
[convertTextToBits](#convertTextToBits)
[convertTextToBitsArray](#convertTextToBitsArray)
[convertTextToBitsMatrix](#convertTextToBitsMatrix)
[convertBitsMatrixToText](#convertBitsMatrixToText)
[convertBitsArrayToText](#convertBitsArrayToText)
[convertBitsToText](#convertBitsToText)
[convertNumberToBits](#convertNumberToBits)
[convertNumberToBitsArray](#convertNumberToBitsArray)

# append

```typescript
function append(options: Options): string
```

Options:
```typescript
interface Options {
  text: string,
  pattern: string,
  maxLength: number,
  direction: Direction
}
```

# appendStart

```typescript
function appendStart(options: Options): string
```

Options:
```typescript
interface Options {
  pattern: string,
  text: string,
  maxLength: number
}
```

# appendEnd

```typescript
function appendEnd(options: Options): string
```

Options:
```typescript
interface Options {
  pattern: string;
  text: string;
  maxLength: number;
}
```

# convertTextToBits

```typescript
function convertTextToBits(text: string, options: Options = {}): string[]
```

Options:
```typescript
interface Options {
  bitsByChar?: number;
  maxLength?: number;
}
```

# convertTextToBitsArray

```typescript
function convertTextToBitsArray(text: string, options: Options = {}): string[]
```

Options:
```typescript
interface Options {
  bitsByChar?: number;
  maxLength?: number;
}
```

# convertTextToBitsMatrix

```typescript
function convertTextToBitsMatrix(text: string, options: Options = {}): number[][]
```

Options:
```typescript
interface Options {
  bitsByChar?: number;
  maxLength?: number;
}
```

# convertBitsMatrixToText

```typescript
function convertBitsMatrixToText(bits: number[][]): string
```

# convertBitsArrayToText

```typescript
function convertBitsArrayToText(bits: number[], bitsByChar: number): string
```

# convertBitsToText

```typescript
function convertBitsToText(bits: string[]): string
```

# convertNumberToBits

```typescript
function convertNumberToBits(num: number, options: Options = {}): string
```

Options:
```typescript
interface Options {
  maxLength?: number;
}
```

# convertNumberToBitsArray

```typescript
function convertNumberToBitsArray(num: number, options: Options = {}): number[]
```

Options:
```typescript
interface Options {
  maxLength?: number;
}
```

