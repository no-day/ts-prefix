# ts-prefix

JavaScript infix and unary operators in prefix notation.
Plus the goodies `call` and `get` for convenient method invocation and property access in pipeline settings.

# Docs

[Api Docs](https://no-day.github.io/ts-prefix/modules/index.ts.html)

# Install

```bash
npm install @no-day/ts-prefix
```

# Example

```ts
import { call, add, mul, get } from '@no-day/ts-prefix';
import { pipe } from 'fp-ts/function';

// Instead of:
const result1a: string = pipe(
  { value: 23 },
  (obj) => obj.value,
  (val) => 23 + val,
  (val) => 2 * val,
  (val) => val.toString()
);

// You can now write:
const result1b: string = pipe(
  { value: 23 },
  get('value'),
  add(23),
  mul(2),
  call('toString')
);

console.log(result1a, result1b);
// --> 92 92
```
