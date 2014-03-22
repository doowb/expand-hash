
module.exports = function (hash) {

  var obj = {};

  for (var key in hash) {
    if (hash.hasOwnProperty(key)) {
      if (key.indexOf('.') === -1) {
        obj[key] = hash[key];
      } else {
        var paths = key.split('.');
        obj[paths[0]] = namespace(obj, key, hash[key]);
      }
    }
  }
  return obj;
};

function namespace (obj, path, value) {
  if (path.indexOf('.') === -1) {
    obj[path] = value;
    return obj;
  }
  var paths = path.split('.');
  var key = paths.shift();
  return namespace((obj[key] = obj[key] || {}), paths.join('.'), value);
}
