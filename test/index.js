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

});
