Use dot notation to recursively expand object keys into nested objects.

```js
var expandHash = require('expand-hash');
var hash = {'foo.bar.baz.bang': 'fez', a: 'b'};
console.log(expandHash(hash));
```

expands to:

```js
// the original key's value is inherited by the last object
{foo: {bar: {baz: {bang: 'fez'} } }, a: 'b'}
```

Also recursively expands keys in nested objects, so that:

```js
{ one: { 'two.three.four.five': 'bar'}, bang: 'fez'}
```
expands to:

```js
{ one: {two: {three: {four: {five: 'bar'} } } }, bang: 'fez' }
```