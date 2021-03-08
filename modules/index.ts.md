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
- [utils](#utils)
  - [div](#div)

---

# Arithmetic

## add

Prefixed and curried version of JS `+` infix operator. Works for strings and numbers.

**Signature**

```ts
export declare const add: { (n1: number): (n2: number) => number; (s1: string): (s2: string) => string }
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

Prefix version `!` unaray operator

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
export declare const call: <N extends string>(
  methodName: N
) => <O extends Record<N, () => any>>(obj: O) => ReturnType<O[N]>
```

**Example**

```ts
import { call } from '@no-day/ts-cecinestpasunepipe'

assert.deepStrictEqual(call('toString')(32), '32')
```

Added in v0.1.0

## get

Invoke an object's method

**Signature**

```ts
export declare const get: <N extends string>(propName: N) => <O extends Record<N, any>>(obj: O) => O[N]
```

**Example**

```ts
import { get } from '@no-day/ts-cecinestpasunepipe'

assert.deepStrictEqual(get('value')({ value: 32 }), 32)
```

Added in v0.1.0

# utils

## div

Prefixed and curried version of JS `/` infix operator

**Signature**

```ts
export declare const div: (n1: number) => (n2: number) => number
```

Added in v0.1.0
