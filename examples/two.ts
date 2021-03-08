import { pipe } from 'fp-ts/function';
import { modify, add } from '../src';

type User = { name: string; age: number };

const user: User = { name: 'Fritz', age: 28 };

pipe(
  user,
  (u) => ({ ...u, ages: 29 }),
  (u) => `${u.name} (${u.age})`,
  console.log
);

pipe(user, modify('age', add(1)), (u) => `${u.name} (${u.age})`, console.log);
