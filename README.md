# ts-prefix

JavaScript infix and unary operators in prefix notation.
Plus some functions for convenient and save record manipulation in pipes.

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

## Record updates

the native way to update a record is quite error prone in TypeScript:

```ts
type User = { name: string; age: number };

const user: User = { name: 'Fritz', age: 28 };

pipe(
  user,
  (u) => ({ ...u, ages: 29 }),
  (u) => `${u.name} (${u.age})`,
  console.log
);
```

This compiles, so all good, right? Not really, the typo `ages` is not captured by the type checker. We just add another field `ages` and continue the pipe with something other than `User`.
One way to protect yourself is to not use the triple dot spread operator, but redefine all fields on every update:

```ts
pipe(
  user,
  (u) => ({ name: u.name, ages: 29 }),
  (u) => `${u.name} (${u.age})`,
  console.log
);
```

Now we get an error. But this gets boilerplaty on large records and is also not really extensible. One other way to solve the issue is to use lenses, e.g. from [monocle-ts](https://github.com/gcanti/monocle-ts). They are perfect for possibly deep record updates, but they also come with an overhead as every lens has to be defined separately.

This library provides a more lightweight solution that is yet safe:

```ts
pipe(user, modify('age', add(1)), (u) => `${u.name} (${u.age})`, console.log);
```

And this will give you an error:

```ts
pipe(user, modify('ages', add(1)), (u) => `${u.name} (${u.age})`, console.log);
```
