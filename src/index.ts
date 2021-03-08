/*
 * @since 0.1.0
 */

/* Invoke an object's method
 * @example
 * assert.deepStrictEqual( call("toString")(32), "32")
 *
 * @since 0.1.0
 */
export const call = <N extends string>(methodName: N) => <
  O extends Record<N, () => any>
>(
  obj: O
): ReturnType<O[N]> => obj[methodName]();

export const get = <N extends string>(propName: N) => <
  O extends Record<N, any>
>(
  obj: O
): O[N] => obj[propName];

// -----------------------------------------------------------------------------
// JS infix operators
// -----------------------------------------------------------------------------

/* Prefixed and curried version of JS `+` infix operator. Works for strings and numbers.
 * @since 0.1.0
 */
export const add: {
  (n1: number): (n2: number) => number;
  (s1: string): (s2: string) => string;
} = (v1: any) => (v2: any): any => v1 + v2;

/* Prefixed and curried version of JS `-` infix operator
 * @since 0.1.0
 */
export const sub = (n1: number) => (n2: number): number => n1 - n2;

/* Prefixed and curried version of JS `*` infix operator
 * @since 0.1.0
 */
export const mul = (n1: number) => (n2: number): number => n1 * n2;

/* Prefixed and curried version of JS `/` infix operator
 * @since 0.1.0
 */
export const div = (n1: number) => (n2: number): number => n1 / n2;

/* Prefixed and curried version of JS `%` infix operator
 * @since 0.1.0
 */
export const rem = (n1: number) => (n2: number): number => n1 % n2;

/* Prefixed and curried version of JS `**` infix operator
 * @since 0.1.0
 */
export const exp = (n1: number) => (n2: number): number => n1 ** n2;

/* Prefixed and curried version of JS `<` infix operator
 * @since 0.1.0
 */
export const lt = <A>(v1: A) => (v2: A): boolean => v1 < v2;

/* Prefixed and curried version of JS `<=` infix operator
 * @since 0.1.0
 */
export const lte = <A>(v1: A) => (v2: A): boolean => v1 <= v2;

/* Prefixed and curried version of JS `>` infix operator
 * @since 0.1.0
 */
export const gt = <A>(v1: A) => (v2: A): boolean => v1 > v2;

/* Prefixed and curried version of JS `>=` infix operator
 * @since 0.1.0
 */
export const gte = <A>(v1: A) => (v2: A): boolean => v1 >= v2;

/* Prefixed and curried version of JS `==` infix operator
 * @since 0.1.0
 */
export const eq = <A>(v1: A) => (v2: A): boolean => v1 == v2;

/* Prefixed and curried version of JS `!=` infix operator
 * @since 0.1.0
 */
export const neq = <A>(v1: A) => (v2: A): boolean => v1 != v2;

/* Prefixed and curried version of JS `!==` infix operator
 * @since 0.1.0
 */
export const neqq = <A>(v1: A) => (v2: A): boolean => v1 !== v2;

/* Prefixed and curried version of JS `||` infix operator
 * @since 0.1.0
 */
export const or = (v1: boolean) => (v2: boolean): boolean => v1 || v2;

/* Prefixed and curried version of JS `&&` infix operator
 * @since 0.1.0
 */
export const and = (v1: boolean) => (v2: boolean): boolean => v1 && v2;

// -----------------------------------------------------------------------------
// JS unary operators
// -----------------------------------------------------------------------------

/* Prefix version `!` unaray operator
 * @since 0.1.0
 */
export const not = (b: boolean): boolean => !b;
