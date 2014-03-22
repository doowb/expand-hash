## Example #1

> Expand basic key-value pairs (nothing special)

```js
var expandHash = require('expand-hash');
var hash = {
  'foo': 'bar',
  'baz': 'bang'
};

var expanded = expandHash(hash);
console.log('expanded: ', expanded);
```

> Outputs `expanded: { foo: 'bar', baz: 'bang' }`

## Example #2

> Expand complex keys into object paths

```js
var expandHash = require('expand-hash');
var hash = {
  'foo.bar': 'bar',
  'foo.baz': 'baz',
  'something': 'else'
};
var expanded = expandHash(hash);
console.log('expanded: ', expanded);
```

> Outputs `expanded: { foo: { bar: 'bar', baz: 'baz' }, something: 'else' }`
