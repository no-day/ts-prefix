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
- [Utils](#utils)
  - [call](#call)
  - [get](#get)
  - [modify](#modify)
  - [set](#set)
  - [unsafeCoerce](#unsafecoerce)

---

# Arithmetic

## add

Prefixed and curried version of JS `+` infix operator. Works for strings and numbers.

**Signature**

```ts
export declare const add: { (n1: number): (n2: number) => number; (s1: string): (s2: string) => string }
```

Added in v0.1.0

## div

Prefixed and curried version of JS `/` infix operator

**Signature**

```ts
export declare const div: (n1: number) => (n2: number) => number
```

Added in v0.1.0

## exp

Prefixed and curried version of JS `**` infix operator

**Signature**

```ts
export declare const exp: (n1: number) => (n2: number) => number
```

Added in v0.1.0

## mul

Prefixed and curried version of JS `*` infix operator

**Signature**

```ts
export declare const mul: (n1: number) => (n2: number) => number
```

Added in v0.1.0

## rem

Prefixed and curried version of JS `%` infix operator

**Signature**

```ts
export declare const rem: (n1: number) => (n2: number) => number
```

Added in v0.1.0

## sub

Prefixed and curried version of JS `-` infix operator

**Signature**

```ts
export declare const sub: (n1: number) => (n2: number) => number
```

Added in v0.1.0

# Comparison

## eq

Prefixed and curried version of JS `==` infix operator

**Signature**

```ts
export declare const eq: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

## gt

Prefixed and curried version of JS `>` infix operator

**Signature**

```ts
export declare const gt: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

## gte

Prefixed and curried version of JS `>=` infix operator

**Signature**

```ts
export declare const gte: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

## lt

Prefixed and curried version of JS `<` infix operator

**Signature**

```ts
export declare const lt: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

## lte

Prefixed and curried version of JS `<=` infix operator

**Signature**

```ts
export declare const lte: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

## neq

Prefixed and curried version of JS `!=` infix operator

**Signature**

```ts
export declare const neq: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

## neqq

Prefixed and curried version of JS `!==` infix operator

**Signature**

```ts
export declare const neqq: <A>(v1: A) => (v2: A) => boolean
```

Added in v0.1.0

# Logical

## and

Prefixed and curried version of JS `&&` infix operator

**Signature**

```ts
export declare const and: (v1: boolean) => (v2: boolean) => boolean
```

Added in v0.1.0

## not

Prefix version of JS `!` unary operator

**Signature**

```ts
export declare const not: (b: boolean) => boolean
```

Added in v0.1.0

## or

Prefixed and curried version of JS `||` infix operator

**Signature**

```ts
export declare const or: (v1: boolean) => (v2: boolean) => boolean
```

Added in v0.1.0

# Utils

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

assert.deepStrictEqual(call('toString')(32), '32')
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

assert.deepStrictEqual(get('value')({ value: 32 }), 32)
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

assert.deepStrictEqual(modify('foo', add(1))({ foo: 10 }), {
  foo: 11,
})
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

assert.deepStrictEqual(set('foo', 32)({ bar: 10 }), {
  foo: 32,
  bar: 10,
})
```

Added in v0.1.0

## unsafeCoerce

Unsafely coerce the type of a value to any other type

**Signature**

```ts
export declare const unsafeCoerce: <T>() => <G>(value: G) => T
```

**Example**

```ts
import { unsafeCoerce } from '@no-day/ts-prefix'

type Internal = { x: number }
type Public = { readonly _brand: unique symbol }

const value: Internal = { x: 3 }

assert.deepStrictEqual(unsafeCoerce<Public>()(value), {
  x: 3,
})
```

Added in v0.1.0
