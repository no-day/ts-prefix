/** @since 0.1.0 */

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

/**
 * Invoke an object's method
 *
 * @since 0.1.0
 * @category Utils
 * @example
 *   import { call } from '@no-day/ts-prefix';
 *
 *   assert.deepStrictEqual(call('toString')(32), '32');
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
 * @category Utils
 * @example
 *   import { get } from '@no-day/ts-prefix';
 *
 *   assert.deepStrictEqual(get('value')({ value: 32 }), 32);
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
 * @category Utils
 * @example
 *   import { set } from '@no-day/ts-prefix';
 *
 *   assert.deepStrictEqual(set('foo', 32)({ bar: 10 }), {
 *     foo: 32,
 *     bar: 10,
 *   });
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
 * @category Utils
 * @example
 *   import { modify, add } from '@no-day/ts-prefix';
 *
 *   assert.deepStrictEqual(modify('foo', add(1))({ foo: 10 }), {
 *     foo: 11,
 *   });
 */
export const modify = <N extends string, V1, V2>(
  propName: N,
  fn: (value: V1) => V2
) => <O extends Record<N, V1>>(obj: O): O & Record<N, V2> => ({
  ...obj,
  [propName]: fn(obj[propName]),
});

/**
 * Unsafely coerce the type of a value to any other type
 *
 * @since 0.1.0
 * @category Utils
 * @example
 *   import { unsafeCoerce } from '@no-day/ts-prefix';
 *
 *   type Internal = { x: number };
 *   type Public = { readonly _brand: unique symbol };
 *
 *   const value: Internal = { x: 3 };
 *
 *   assert.deepStrictEqual(unsafeCoerce<Public>()(value), {
 *     x: 3,
 *   });
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
 */
export const sub = (n1: number) => (n2: number): number => n1 - n2;

/**
 * Prefixed and curried version of JS `*` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 */
export const mul = (n1: number) => (n2: number): number => n1 * n2;

/**
 * Prefixed and curried version of JS `/` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 */
export const div = (n1: number) => (n2: number): number => n1 / n2;

/**
 * Prefixed and curried version of JS `%` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
 */
export const rem = (n1: number) => (n2: number): number => n1 % n2;

/**
 * Prefixed and curried version of JS `**` infix operator
 *
 * @since 0.1.0
 * @category Arithmetic
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
 */
export const lt = <A>(v1: A) => (v2: A): boolean => v1 < v2;

/**
 * Prefixed and curried version of JS `<=` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 */
export const lte = <A>(v1: A) => (v2: A): boolean => v1 <= v2;

/**
 * Prefixed and curried version of JS `>` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 */
export const gt = <A>(v1: A) => (v2: A): boolean => v1 > v2;

/**
 * Prefixed and curried version of JS `>=` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 */
export const gte = <A>(v1: A) => (v2: A): boolean => v1 >= v2;

/**
 * Prefixed and curried version of JS `==` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 */
export const eq = <A>(v1: A) => (v2: A): boolean => v1 == v2;

/**
 * Prefixed and curried version of JS `!=` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 */
export const neq = <A>(v1: A) => (v2: A): boolean => v1 != v2;

/**
 * Prefixed and curried version of JS `!==` infix operator
 *
 * @since 0.1.0
 * @category Comparison
 */
export const neqq = <A>(v1: A) => (v2: A): boolean => v1 !== v2;

/// -----------------------------------------------------------------------------
// Logical
// -----------------------------------------------------------------------------

/**
 * Prefixed and curried version of JS `||` infix operator
 *
 * @since 0.1.0
 * @category Logical
 */
export const or = (v1: boolean) => (v2: boolean): boolean => v1 || v2;

/**
 * Prefixed and curried version of JS `&&` infix operator
 *
 * @since 0.1.0
 * @category Logical
 */
export const and = (v1: boolean) => (v2: boolean): boolean => v1 && v2;

/**
 * Prefix version of JS `!` unary operator
 *
 * @since 0.1.0
 * @category Logical
 */
export const not = (b: boolean): boolean => !b;
