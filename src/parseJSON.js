// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // if (json === 'true') {
  //   return true;
  // }
  // if (json === 'false') {
  //   return false;
  // }
  // if (json === 'null') {
  //   return null;
  // }
  // if (json.length === json.replace(/[^0-9]/gi, '').length) {
  //   return Number(json);
  // }
  // if ((json.startsWith('"') || json.startsWith("'")) && (json.endsWith('"') || json.endsWith("'"))) {
  //   return json.slice(1, -1);
  // }
  
  // if (json.startsWith('{')) {
    
  // }
  
  // if (json.startsWith('['))
  
  var index, char;

  var next = function() {
    index++;
    char = json.charAt(index); // json is the JSON text passed into our parser
    return char;
  };

  var value = function () {
    if (char === '{') {
      return objects();
    } else if (char === '[') {
      return arrays();
    } else if (char === '\"') {
      return strings();
    } else if (char === 't' || char === 'f') {
      return bools();
    } else if (char === 'n') {
      return nulls();
    } else if (char === '-' || (char && char >= 0 && char <= 9)) {
      return numbers();
    } else {
      throw SyntaxError;
    }
  };
  
  var objects = function() {
    
  }
  
  var arrays = function() {
    
  }
  
  var strings = function() {
    
  }
  
  var bools = function() {
    
  }
  
  var nulls = function() {
    
  }
  
  var numbers = function() {
    
  }
  
  
};
