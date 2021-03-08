import { call, add, mul, get, eq } from '../src';
import { pipe } from 'fp-ts/function';

const result1: string = pipe(
  { value: 23 },
  get('value'),
  add(23),
  mul(2),
  call('toString')
);

console.log(result1);
// --> 92

const result2: boolean = pipe(
  'light',
  add('See the '),
  call('toUpperCase'),
  eq('SEE THE LIGHT')
);

console.log(result2);
// --> true
