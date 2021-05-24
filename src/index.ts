/** @since 0.1.0 */

// -----------------------------------------------------------------------------
// Records
// -----------------------------------------------------------------------------

/**
 * Invoke an object's method
 *
 * @since 0.1.0
 * @category Records
 * @example
 *   import { call } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (obj) => obj.toString()),
 *
 *     // Prefix
 *     pipe(42, call('toString'))
 *   );
 */
export const call = <N extends string, Args extends any[]>(
  methodName: N,
  ...args: Args
) => <O extends Record<N, (...args: Args) => any>>(obj: O): ReturnType<O[N]> =>
  obj[methodName](...args);

/**
 * Access an object's field
 *
 * @since 0.1.0
 * @category Records
 * @example
 *   import { get } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe({ count: 42 }, ({ count }) => count),
 *
 *     // Prefix
 *     pipe({ count: 42 }, get('count'))
 *   );
 */
export const get = <N extends string>(propName: N) => <
  O extends Record<N, any>
>(
  obj: O
): O[N] => obj[propName];

/**
 * Set an object's field to a value
 *
 * @since 0.1.0
 * @category Records
 * @example
 *   import { set } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe({ count: 42 }, (obj) => ({ ...obj, name: 'Joe' })),
 *
 *     // Prefix
 *     pipe({ count: 42 }, set('name', 'Joe'))
 *   );
 */
export const set = <N extends string, V>(propName: N, value: V) => <
  O extends Record<any, any>
>(
  obj: O
): O & Record<N, V> => ({ ...obj, [propName]: value });

/**
 * Modify an object's field with a function
 *
 * @since 0.1.0
 * @category Records
 * @example
 *   import { modify, add } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe({ count: 42 }, (obj) => ({ count: obj.count + 1 })),
 *
 *     // Prefix
 *     pipe({ count: 42 }, modify('count', add(1)))
 *   );
 */
export const modify = <N extends string, V1, V2, O extends Record<N, V1>>(
  propName: N,
  fn: (value: O[N]) => V2
) => (obj: O): ShallowMerge<O, Record<N, V2>> => ({
  ...obj,
  [propName]: fn(obj[propName]),
});

/**
 * Merge two objects
 *
 * @since 0.1.0
 * @category Records
 * @example
 *   import { merge } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe({ count: 42, name: 'Joe' }, ({ ...obj }) => ({
 *       ...obj,
 *       street: 'Main Street',
 *       id: 0,
 *     })),
 *
 *     // Prefix
 *     pipe(
 *       { count: 42, name: 'Joe' },
 *       merge({ street: 'Main Street', id: 0 })
 *     )
 *   );
 */
export const merge = <O1>(obj1: O1) => <O2>(
  obj2: O2
): ShallowMerge<O1, O2> => ({
  ...obj1,
  ...obj2,
});

/**
 * Delete an object's field
 *
 * @since 0.1.0
 * @category Records
 * @example
 *   import { remove } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe({ count: 42, name: 'Joe' }, ({ count, ...obj }) => ({
 *       ...obj,
 *     })),
 *
 *     // Prefix
 *     pipe({ count: 42, name: 'Joe' }, remove('count'))
 *   );
 */
export const remove = <N extends string>(propName: N) => <
  O extends Record<N, any>
>(
  all: O
): Omit<O, N> => {
  const { [propName]: value, ...obj } = all;

  return obj;
};

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

/**
 * Unsafely coerce the type of a value to any other type
 *
 * @since 0.1.0
 * @category Utils
 * @example
 *   import { unsafeCoerce } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   type Internal = { x: number };
 *   type Public = { readonly _brand: unique symbol };
 *
 *   const value: Internal = { x: 3 };
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(value, (obj) => (obj as unknown) as Public),
 *
 *     // Prefix
 *     pipe(value, unsafeCoerce<Public>())
 *   );
 */
export const unsafeCoerce = <T>() => <G>(value: G): T =>
  (value as unknown) as T;

// -----------------------------------------------------------------------------
// Arithmetic
// -----------------------------------------------------------------------------

/**
 * Prefixed and curried version of JS `+` infix operator. Works for strings and numbers.
 *
 * @since 0.1.0
 * @category Arithmetic
 * @example
 *   import { add } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 + val),
 *
 *     // Prefix
 *     pipe(42, add(2))
 *   );
 */
export const add: {
  (n1: number): (n2: number) => number;
  (s1: string): (s2: string) => string;
} = (v1: any) => (v2: any): any => v1 + v2;

/**
 * Prefixed and curried version of JS `-` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 * @example
 *   import { sub } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 - val),
 *
 *     // Prefix
 *     pipe(42, sub(2))
 *   );
 */
export const sub = (n1: number) => (n2: number): number => n1 - n2;

/**
 * Prefixed and curried version of JS `*` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 * @example
 *   import { mul } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 * val),
 *
 *     // Prefix
 *     pipe(42, mul(2))
 *   );
 */
export const mul = (n1: number) => (n2: number): number => n1 * n2;

/**
 * Prefixed and curried version of JS `/` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 * @example
 *   import { div } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 / val),
 *
 *     // Prefix
 *     pipe(42, div(2))
 *   );
 */
export const div = (n1: number) => (n2: number): number => n1 / n2;

/**
 * Prefixed and curried version of JS `%` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 * @example
 *   import { rem } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 % val),
 *
 *     // Prefix
 *     pipe(42, rem(2))
 *   );
 */
export const rem = (n1: number) => (n2: number): number => n1 % n2;

/**
 * Prefixed and curried version of JS `**` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 * @example
 *   import { exp } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 ** val),
 *
 *     // Prefix
 *     pipe(42, exp(2))
 *   );
 */
export const exp = (n1: number) => (n2: number): number => n1 ** n2;

// -----------------------------------------------------------------------------
// Comparison
// -----------------------------------------------------------------------------

/**
 * Prefixed and curried version of JS `<` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { lt } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 < val),
 *
 *     // Prefix
 *     pipe(42, lt(2))
 *   );
 */
export const lt = <A>(v1: A) => (v2: A): boolean => v1 < v2;

/**
 * Prefixed and curried version of JS `<=` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { lte } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 <= val),
 *
 *     // Prefix
 *     pipe(42, lte(2))
 *   );
 */
export const lte = <A>(v1: A) => (v2: A): boolean => v1 <= v2;

/**
 * Prefixed and curried version of JS `>` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { gt } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 > val),
 *
 *     // Prefix
 *     pipe(42, gt(2))
 *   );
 */
export const gt = <A>(v1: A) => (v2: A): boolean => v1 > v2;

/**
 * Prefixed and curried version of JS `>=` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { gte } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 >= val),
 *
 *     // Prefix
 *     pipe(42, gte(2))
 *   );
 */
export const gte = <A>(v1: A) => (v2: A): boolean => v1 >= v2;

/**
 * Prefixed and curried version of JS `==` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { eq } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 == val),
 *
 *     // Prefix
 *     pipe(42, eq(2))
 *   );
 */
export const eq = <A>(v1: A) => (v2: A): boolean => v1 == v2;

/**
 * Prefixed and curried version of JS `!=` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { neq } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 != val),
 *
 *     // Prefix
 *     pipe(42, neq(2))
 *   );
 */

export const neq = <A>(v1: A) => (v2: A): boolean => v1 != v2;

/**
 * Prefixed and curried version of JS `!==` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 * @example
 *   import { neqq } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(42, (val) => 2 !== val),
 *
 *     // Prefix
 *     pipe(42, neqq(2))
 *   );
 */

export const neqq = <A>(v1: A) => (v2: A): boolean => v1 !== v2;

/// ----------------------------------------------------------------------------
// Logical
// -----------------------------------------------------------------------------

/**
 * Prefixed and curried version of JS `||` infix operator
 *
 * @since 0.1.0
 * @category Logical
 * @example
 *   import { or } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(true, (val) => val || false),
 *
 *     // Prefix
 *     pipe(true, or(false))
 *   );
 */

export const or = (v1: boolean) => (v2: boolean): boolean => v1 || v2;

/**
 * Prefixed and curried version of JS `&&` infix operator
 *
 * @since 0.1.0
 * @category Logical
 * @example
 *   import { and } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(true, (val) => val && true),
 *
 *     // Prefix
 *     pipe(true, and(true))
 *   );
 */
export const and = (v1: boolean) => (v2: boolean): boolean => v1 && v2;

/**
 * Prefix version of JS `!` unary operator
 *
 * @since 0.1.0
 * @category Logical
 * @example
 *   import { not } from '@no-day/ts-prefix';
 *   import { pipe } from 'fp-ts/function';
 *
 *   assert.deepStrictEqual(
 *     // Native
 *     pipe(true, (val) => !val),
 *
 *     // Prefix
 *     pipe(true, not)
 *   );
 */
export const not = (b: boolean): boolean => !b;

/// ----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

/**
 * Merge two record types shallowly
 *
 * @since 0.2.0
 * @category Types
 */
export type ShallowMerge<O1, O2> = Omit<O1, keyof O2> & O2;
