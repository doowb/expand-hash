var expect = require('chai').expect,
    expandHash = require('..');

describe('expand-hash', function() {

  /***
  var expandHash = require('expand-hash');
  var hash = {
    'foo': 'bar',
    'baz': 'bang'
  };

  var expanded = expandHash(hash);
  console.log('expanded: ', expanded);
  ***/

  it('expand simple hash', function(done) {
    var simple = { 'foo': 'bar', 'baz': 'bang' };
    var expected = { foo: 'bar', baz: 'bang' };
    var actual = expandHash(simple);
    expect(actual).to.eql(expected);
    done();
  });

  /***
  var expandHash = require('expand-hash');
  var hash = {
    'foo.bar': 'bar',
    'foo.baz': 'baz',
    'something': 'else'
  };
  var expanded = expandHash(hash);
  console.log('expanded: ', expanded);
  **/

  it('expand complex hash', function (done) {
    var complex = { 'foo.bar': 'bar', 'foo.baz': 'baz', 'beep.boop': 'bop', 'something': 'else' };
    var expected = { foo: { bar: 'bar', baz: 'baz' }, beep: { boop: 'bop' }, something: 'else' };
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });

  it('expand complex hash', function (done) {
    var complex = {'one.two.three.four.five': 'bar', bang: 'fez'};
    var expected = {one: {two: {three: {four: {five: 'bar'} } } }, bang: 'fez' };
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });
});

describe('when keys are nested', function() {
  it('should expand the prop strings into objects', function (done) {
    var complex = { one: { 'two.three.four.five': 'bar'}, bang: 'fez'};
    var expected = {one: {two: {three: {four: {five: 'bar'} } } }, bang: 'fez' };
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });
});

describe('when keys are nested', function() {
  it('should expand the prop strings into objects', function (done) {
    var complex = { a: ['b', 'c'], one: { 'two.three.four.five': 'bar'}, bang: 'fez'};
    var expected = { a: ['b', 'c'], one: {two: {three: {four: {five: 'bar'} } } }, bang: 'fez' };
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });
});

describe('when keys are nested', function() {
  it('should expand the prop strings into objects', function (done) {
    var complex = { a: ['b', 'c'], one: {two: {three: { 'four.five': 'bar'} } }, bang: 'fez' };
    var expected = { a: ['b', 'c'], one: {two: {three: {four: {five: 'bar'} } } }, bang: 'fez' };
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });
});


describe('when keys are nested', function () {
  it('should expand the prop strings into objects', function (done) {
    var complex = {a: ['b', 'c'], one: {two: {three: {four: {five: {six: {seven: {'a.b.c.d.e.f.g': 'Dante\'s ninth circle'} } } } } } }, bang: 'fez'};
    var expected = {a: ['b', 'c'], one: {two: {three: {four: {five: {six: {seven: {a: {b: {c: {d: {e: {f: {g: 'Dante\'s ninth circle'} } } } } } } } } } } } }, bang: 'fez'};
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });
});

describe('when the value is an object', function() {
  it('should expand the prop strings into objects', function (done) {
    var complex = {'foo.bar': {'aaa': 'bbbb', 'ccc': 'dddd', 'eee': 'ffff'} };
    var expected = {foo: {bar: {'aaa': 'bbbb', 'ccc': 'dddd', 'eee': 'ffff'} } };
    var actual = expandHash(complex);
    expect(actual).to.eql(expected);
    done();
  });
});