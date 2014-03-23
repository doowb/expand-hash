Expand keys into object paths.

```js
var hash = {
  'foo.bar': 'bar',
  'foo.baz': 'baz',
  'something': 'else'
};
var expanded = expandHash(hash);
console.log('expanded: ', expanded);
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