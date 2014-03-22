var expect = require('chai').expect,
    expandHash = require('..');

describe('expand-hash', function() {
  it('should say hello', function(done) {
    expect(expandHash()).to.equal('Hello, world');
    done();
  });
});
