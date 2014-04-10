Use within your application with the following line of JavaScript:

```js
var expandHash = require('expand-hash');
```

Expand keys into object paths.

```js
var hash = {
  'foo.bar': 'bar',
  'foo.baz': 'baz',
  'something': 'else'
};
console.log(expandHash(hash));
```

Results in

```js
expanded: {
  foo: {
    bar: 'bar',
    baz: 'baz'
  },
  something: 'else'
}
```