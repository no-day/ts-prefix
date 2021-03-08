---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Arithmetic](#arithmetic)
  - [add](#add)
  - [div](#div)
  - [exp](#exp)
  - [mul](#mul)
  - [rem](#rem)
  - [sub](#sub)
- [Comparison](#comparison)
  - [eq](#eq)
  - [gt](#gt)
  - [gte](#gte)
  - [lt](#lt)
  - [lte](#lte)
  - [neq](#neq)
  - [neqq](#neqq)
- [Logical](#logical)
  - [and](#and)
  - [not](#not)
  - [or](#or)
- [Records](#records)
  - [call](#call)
  - [get](#get)
  - [modify](#modify)
  - [remove](#remove)
  - [set](#set)
- [Utils](#utils)
  - [unsafeCoerce](#unsafecoerce)

---

# Arithmetic

## add

Prefixed and curried version of JS `+` infix operator. Works for strings and numbers.

**Signature**

```ts
export declare const add: { (n1: number): (n2: number) => number; (s1: string): (s2: string) => string }
```

**Example**

```ts
import { add } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 + val),

  // Prefix
  pipe(42, add(2))
)
```

Added in v0.1.0

## div

Prefixed and curried version of JS `/` infix operator

**Signature**

```ts
export declare const div: (n1: number) => (n2: number) => number
```

**Example**

```ts
import { div } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 / val),

  // Prefix
  pipe(42, div(2))
)
```

Added in v0.1.0

## exp

Prefixed and curried version of JS `**` infix operator

**Signature**

```ts
export declare const exp: (n1: number) => (n2: number) => number
```

**Example**

```ts
import { exp } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 ** val),

  // Prefix
  pipe(42, exp(2))
)
```

Added in v0.1.0

## mul

Prefixed and curried version of JS `*` infix operator

**Signature**

```ts
export declare const mul: (n1: number) => (n2: number) => number
```

**Example**

```ts
import { mul } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 * val),

  // Prefix
  pipe(42, mul(2))
)
```

Added in v0.1.0

## rem

Prefixed and curried version of JS `%` infix operator

**Signature**

```ts
export declare const rem: (n1: number) => (n2: number) => number
```

**Example**

```ts
import { rem } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 % val),

  // Prefix
  pipe(42, rem(2))
)
```

Added in v0.1.0

## sub

Prefixed and curried version of JS `-` infix operator

**Signature**

```ts
export declare const sub: (n1: number) => (n2: number) => number
```

**Example**

```ts
import { sub } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 - val),

  // Prefix
  pipe(42, sub(2))
)
```

Added in v0.1.0

# Comparison

## eq

Prefixed and curried version of JS `==` infix operator

**Signature**

```ts
export declare const eq: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { eq } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 == val),

  // Prefix
  pipe(42, eq(2))
)
```

Added in v0.1.0

## gt

Prefixed and curried version of JS `>` infix operator

**Signature**

```ts
export declare const gt: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { gt } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 > val),

  // Prefix
  pipe(42, gt(2))
)
```

Added in v0.1.0

## gte

Prefixed and curried version of JS `>=` infix operator

**Signature**

```ts
export declare const gte: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { gte } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 >= val),

  // Prefix
  pipe(42, gte(2))
)
```

Added in v0.1.0

## lt

Prefixed and curried version of JS `<` infix operator

**Signature**

```ts
export declare const lt: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { lt } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 < val),

  // Prefix
  pipe(42, lt(2))
)
```

Added in v0.1.0

## lte

Prefixed and curried version of JS `<=` infix operator

**Signature**

```ts
export declare const lte: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { lte } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 <= val),

  // Prefix
  pipe(42, lte(2))
)
```

Added in v0.1.0

## neq

Prefixed and curried version of JS `!=` infix operator

**Signature**

```ts
export declare const neq: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { neq } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 != val),

  // Prefix
  pipe(42, neq(2))
)
```

Added in v0.1.0

## neqq

Prefixed and curried version of JS `!==` infix operator

**Signature**

```ts
export declare const neqq: <A>(v1: A) => (v2: A) => boolean
```

**Example**

```ts
import { neqq } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (val) => 2 !== val),

  // Prefix
  pipe(42, neqq(2))
)
```

Added in v0.1.0

# Logical

## and

Prefixed and curried version of JS `&&` infix operator

**Signature**

```ts
export declare const and: (v1: boolean) => (v2: boolean) => boolean
```

**Example**

```ts
import { and } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(true, (val) => val && true),

  // Prefix
  pipe(true, and(true))
)
```

Added in v0.1.0

## not

Prefix version of JS `!` unary operator

**Signature**

```ts
export declare const not: (b: boolean) => boolean
```

**Example**

```ts
import { not } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(true, (val) => !val),

  // Prefix
  pipe(true, not)
)
```

Added in v0.1.0

## or

Prefixed and curried version of JS `||` infix operator

**Signature**

```ts
export declare const or: (v1: boolean) => (v2: boolean) => boolean
```

**Example**

```ts
import { or } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(true, (val) => val || false),

  // Prefix
  pipe(true, or(false))
)
```

Added in v0.1.0

# Records

## call

Invoke an object's method

**Signature**

```ts
export declare const call: <N extends string, Args extends any[]>(
  methodName: N,
  ...args: Args
) => <O extends Record<N, (...args: Args) => any>>(obj: O) => ReturnType<O[N]>
```

**Example**

```ts
import { call } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe(42, (obj) => obj.toString()),

  // Prefix
  pipe(42, call('toString'))
)
```

Added in v0.1.0

## get

Access an object's field

**Signature**

```ts
export declare const get: <N extends string>(propName: N) => <O extends Record<N, any>>(obj: O) => O[N]
```

**Example**

```ts
import { get } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe({ count: 42 }, ({ count }) => count),

  // Prefix
  pipe({ count: 42 }, get('count'))
)
```

Added in v0.1.0

## modify

Modify an object's field with a function

**Signature**

```ts
export declare const modify: <N extends string, V1, V2>(
  propName: N,
  fn: (value: V1) => V2
) => <O extends Record<N, V1>>(obj: O) => O & Record<N, V2>
```

**Example**

```ts
import { modify, add } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe({ count: 42 }, (obj) => ({ count: obj.count + 1 })),

  // Prefix
  pipe({ count: 42 }, modify('count', add(1)))
)
```

Added in v0.1.0

## remove

Delete an object's field

**Signature**

```ts
export declare const remove: <N extends string>(
  propName: N
) => <O extends Record<N, any>>(all: O) => Pick<O, Exclude<keyof O, N>>
```

**Example**

```ts
import { remove } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe({ count: 42, name: 'Joe' }, ({ count, ...obj }) => ({
    ...obj,
  })),

  // Prefix
  pipe({ count: 42, name: 'Joe' }, remove('count'))
)
```

Added in v0.1.0

## set

Set an object's field to a value

**Signature**

```ts
export declare const set: <N extends string, V>(
  propName: N,
  value: V
) => <O extends Record<any, any>>(obj: O) => O & Record<N, V>
```

**Example**

```ts
import { set } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

assert.deepStrictEqual(
  // Native
  pipe({ count: 42 }, (obj) => ({ ...obj, name: 'Joe' })),

  // Prefix
  pipe({ count: 42 }, set('name', 'Joe'))
)
```

Added in v0.1.0

# Utils

## unsafeCoerce

Unsafely coerce the type of a value to any other type

**Signature**

```ts
export declare const unsafeCoerce: <T>() => <G>(value: G) => T
```

**Example**

```ts
import { unsafeCoerce } from '@no-day/ts-prefix'
import { pipe } from 'fp-ts/function'

type Internal = { x: number }
type Public = { readonly _brand: unique symbol }

const value: Internal = { x: 3 }

assert.deepStrictEqual(
  // Native
  pipe(value, (obj) => (obj as unknown) as Public),

  // Prefix
  pipe(value, unsafeCoerce<Public>())
)
```

Added in v0.1.0
