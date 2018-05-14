const expand = require('./');
const obj = {
  'foo.bar.bar': 'some value',
  'foo.qux': 'another value',
  fez: true
};
console.log(expand(obj));
