const _ = require('lodash');
const toString = Object.prototype.toString;

function type(val) {
  return toString.call(val).toLowerCase().replace(/\[object ([\S]+)\]/, '$1');
}

function namespace(obj, str, value) {
  var original = str, name;

  if (!/\./.test(str)) {
    obj[str] = value;
    return obj;
  }

  var paths = str.split('.');
  while (paths.length > 0) {
    var key = paths.shift();
    name = namespace((obj[key] = obj[key] || {}), paths.join('.'), value);
    if (str === original) { break; }
  }
  return name;
}

var expand = function (obj) {
  var result = {};

  Object.keys(obj).forEach(function(key) {
    if (!/\./.test(key)) {
      result[key] = obj[key];
    } else {
      var paths = key.split('.');
      paths = ['__remove__'].concat(paths);
      result[paths[0]] = namespace(result, key, obj[key]);
    }
  });

  delete result.__remove__;
  return result;
};


// recursively expand the keys on each object
var recurse = module.exports = function(value) {
  var orig = value, data = {};

  Object.keys(value).forEach(function(key) {
    _.extend(data, expand(value));
    if (type(value[key]) === 'object') {
      value[key] = _.extend(expand(value[key]), recurse(value[key]));
    } else {
      return value;
    }
  });
  return data;
};