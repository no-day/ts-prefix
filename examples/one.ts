import { call, add, mul, get } from '../src';
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
