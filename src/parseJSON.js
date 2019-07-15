// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  if (json === 'null') {
    return null;
  }
  if (json.length === json.replace(/^0-9/gi, '').length) {
    return Number(json);
  }
  if ((json.startsWith('"') || json.startsWith("'")) && (json.endsWith('"') || json.endsWith("'"))) {
    return json.slice(1, -1);
  }
  
};
