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

Instead of:

```ts
import { pipe } from 'fp-ts/function';

const result: string = pipe(
  { value: 23 },
  (obj) => obj.value,
  (val) => 23 + val,
  (val) => 2 * val,
  (val) => val.toString()
);

console.log(result);
// --> 92
```

You can now write:

```ts
import { call, add, mul, get } from '@no-day/ts-prefix';
import { pipe } from 'fp-ts/function';

const result: string = pipe(
  { value: 23 },
  get('value'),
  add(23),
  mul(2),
  call('toString')
);

console.log(result);
// --> 92
```
