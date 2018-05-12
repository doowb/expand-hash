'use strict';

require('mocha');
const assert = require('assert');
const expandHash = require('..');

describe('expand-hash', () => {
  it('expand simple hash', () => {
    assert.deepEqual(expandHash({ foo: 'bar', baz: 'bang' }), { foo: 'bar', baz: 'bang' });
  });

  it('expand multiple props with the same keys', () => {
    assert.deepEqual(expandHash({ 'foo.bar': 'bar', 'foo.baz': 'baz', 'beep.boop': 'bop', something: 'else' }), {
      foo: { bar: 'bar', baz: 'baz' },
      beep: { boop: 'bop' },
      something: 'else'
    });
  });

  it('expand to deeply nested object', () => {
    const complex = { 'one.two.three.four.five': 'bar', bang: 'fez' };
    const expected = { one: { two: { three: { four: { five: 'bar' } } } }, bang: 'fez' };
    const actual = expandHash(complex);
    assert.deepEqual(actual, expected);
  });

  it('should expand nested keys into objects', () => {
    assert.deepEqual(expandHash({ one: { 'two.three.four.five': 'bar' }, bang: 'fez' }), {
      one: { two: { three: { four: { five: 'bar' } } } },
      bang: 'fez'
    });

    assert.deepEqual(expandHash({ a: ['b', 'c'], one: { 'two.three.four.five': 'bar' }, bang: 'fez' }), {
      a: ['b', 'c'],
      one: { two: { three: { four: { five: 'bar' } } } },
      bang: 'fez'
    });
  });

  it('should expand keys on object values into objects', () => {
    assert.deepEqual(expandHash({ a: ['b', 'c'], one: { two: { three: { 'four.five': 'bar' } } }, bang: 'fez' }), {
      a: ['b', 'c'],
      one: { two: { three: { four: { five: 'bar' } } } },
      bang: 'fez'
    });
  });

  it('should expand keys in arrays into objects', () => {
    assert.deepEqual(expandHash({ a: [{'a.b': 'c'}, 'c'], one: { two: { three: { 'four.five': 'bar' } } }, bang: 'fez' }), {
      a: [ { a: { b: 'c' } }, 'c' ],
      one: { two: { three: { four: { five: 'bar' } } } },
      bang: 'fez'
    });
  });
});
