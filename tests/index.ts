import * as prefix from '../src';
import { deepStrictEqual } from 'assert';

describe('index', () => {
  describe('call', () => {
    it('calls a method with no arguments', () => {
      deepStrictEqual(prefix.call('toString')(34), '34');
    });
  });
});
