import * as prefix from '../src';
import { deepStrictEqual, notStrictEqual } from 'assert';
import * as fc from 'fast-check';

describe('index', () => {
  describe('Utils', () => {
    describe('call', () => {
      it('calls a method with no arguments', () => {
        deepStrictEqual(prefix.call('foo')({ foo: () => true }), true);
      });

      it('calls a method with arguments', () => {
        deepStrictEqual(
          prefix.call('foo', 2, 'bar')({ foo: (x: number, v: string) => true }),
          true
        );
      });
    });

    describe('get', () => {
      it("gets an object's propery", () => {
        deepStrictEqual(prefix.get('foo')({ foo: 32 }), 32);
      });
    });

    describe('set', () => {
      it('sets a new property in an object', () => {
        deepStrictEqual(prefix.set('foo', 32)({ bar: 10 }), {
          bar: 10,
          foo: 32,
        });
      });

      it('sets an existing property in an object', () => {
        deepStrictEqual(prefix.set('foo', 32)({ foo: 10 }), { foo: 32 });
      });

      it('does not mutate', () => {
        const oldObj = { bar: 10 };
        const newObj = prefix.set('foo', 32)({ bar: 10 });

        notStrictEqual(oldObj, newObj);
      });
    });

    describe('modify', () => {
      it('modifies an existing property in an object', () => {
        deepStrictEqual(prefix.modify('foo', prefix.add(1))({ foo: 32 }), {
          foo: 33,
        });
      });

      it('does not mutate', () => {
        const oldObj = { bar: 10 };
        const newObj = prefix.modify('foo', (x) => x)({ foo: 10 });

        notStrictEqual(oldObj, newObj);
      });
    });
  });

  describe('Arithmetic', () => {
    describe('add', () => {
      it('behaves like `+` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.add(v1)(v2), v1 + v2);
          })
        );
      });

      it('behaves like `+` for strings', () => {
        fc.assert(
          fc.property(fc.string(), fc.string(), (v1, v2) => {
            deepStrictEqual(prefix.add(v1)(v2), v1 + v2);
          })
        );
      });
    });
  });

  describe('sub', () => {
    it('behaves like `-` for floats', () => {
      fc.assert(
        fc.property(fc.float(), fc.float(), (v1, v2) => {
          deepStrictEqual(prefix.sub(v1)(v2), v1 - v2);
        })
      );
    });
  });

  describe('mul', () => {
    it('behaves like `*` for floats', () => {
      fc.assert(
        fc.property(fc.float(), fc.float(), (v1, v2) => {
          deepStrictEqual(prefix.mul(v1)(v2), v1 * v2);
        })
      );
    });
  });

  describe('div', () => {
    it('behaves like `/` for floats', () => {
      fc.assert(
        fc.property(fc.float(), fc.float(), (v1, v2) => {
          deepStrictEqual(prefix.div(v1)(v2), v1 / v2);
        })
      );
    });
  });

  describe('exp', () => {
    it('behaves like `**` for floats', () => {
      fc.assert(
        fc.property(fc.float(), fc.float(), (v1, v2) => {
          deepStrictEqual(prefix.exp(v1)(v2), v1 ** v2);
        })
      );
    });
  });

  describe('sub', () => {
    it('behaves like `+` for floats', () => {
      fc.assert(
        fc.property(fc.float(), fc.float(), (v1, v2) => {
          deepStrictEqual(prefix.sub(v1)(v2), v1 - v2);
        })
      );
    });
  });

  describe('Comparison', () => {
    describe('lt', () => {
      it('behaves like `<` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.lt(v1)(v2), v1 < v2);
          })
        );
      });
    });

    describe('lte', () => {
      it('behaves like `<=` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.lte(v1)(v2), v1 <= v2);
          })
        );
      });
    });

    describe('gt', () => {
      it('behaves like `>` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.gt(v1)(v2), v1 > v2);
          })
        );
      });
    });

    describe('gte', () => {
      it('behaves like `>=` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.gte(v1)(v2), v1 >= v2);
          })
        );
      });
    });

    describe('eq', () => {
      it('behaves like `==` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.eq(v1)(v2), v1 == v2);
          })
        );
      });
    });

    describe('neq', () => {
      it('behaves like `!=` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.neq(v1)(v2), v1 != v2);
          })
        );
      });
    });

    describe('neqq', () => {
      it('behaves like `!==` for floats', () => {
        fc.assert(
          fc.property(fc.float(), fc.float(), (v1, v2) => {
            deepStrictEqual(prefix.neqq(v1)(v2), v1 !== v2);
          })
        );
      });
    });
  });

  describe('Logical', () => {
    describe('or', () => {
      it('behaves like `||`', () => {
        fc.assert(
          fc.property(fc.boolean(), fc.boolean(), (v1, v2) => {
            deepStrictEqual(prefix.or(v1)(v2), v1 || v2);
          })
        );
      });
    });

    describe('and', () => {
      it('behaves like `&&`', () => {
        fc.assert(
          fc.property(fc.boolean(), fc.boolean(), (v1, v2) => {
            deepStrictEqual(prefix.and(v1)(v2), v1 && v2);
          })
        );
      });
    });

    describe('not', () => {
      it('behaves like `||`', () => {
        fc.assert(
          fc.property(fc.boolean(), (v1) => {
            deepStrictEqual(prefix.not(v1), !v1);
          })
        );
      });
    });
  });
});
