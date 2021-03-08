# ts-cecinestpasunepipe

[Ceci n'est pas une pipe](https://en.wikipedia.org/wiki/The_Treachery_of_Images): Piping utils for TypeScript

JavaScript binaray/infix and unaray operators in curried prefix notation.
Plus the goodies `call` and `get` for convenient method invocation and property access in pipeline settings.

# Docs

[Api Docs]()

# Example

```ts
import { call, add, mul, get, eq } from '../src';
import { pipe } from 'fp-ts/function';

const result1: string = pipe(
  { value: 23 },
  get('value'),
  add(23),
  mul(2),
  call('toString')
);

console.log(result1);
// --> 92

const result2: boolean = pipe(
  'light',
  add('See the '),
  call('toUpperCase'),
  eq('SEE THE LIGHT')
);

console.log(result2);
// --> true
```
