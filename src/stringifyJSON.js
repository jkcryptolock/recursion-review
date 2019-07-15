// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if it's boolean, number, or string - return value in quotes
  //if it's an Array and containes a function, or undefined, return null
  //otherwise skip the value
  
  let result = [];
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }
  
  if (typeof obj === 'function' || obj === undefined) {
    return  '';
  }
  
  if (Array.isArray(obj)) {
    return '[' + obj.map(ele => stringifyJSON(ele)).join(',') + ']';
  }
  
  if (typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
      }
    }
    return '{' + result + '}';
  }
  
};
