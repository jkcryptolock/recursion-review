// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  const Node = document.body;
  let result = [];
  
  let recursive = function(elem) {
    let children = elem.childNodes; 
    if(elem.classList && elem.classList.contains(className)) {
      result.push(elem); 
    }
    if(elem.childNodes) {
      for(let i = 0; i < children.length; i++) {
        recursive(children[i]);
        }
    }
  };

  recursive(Node);

  return result;

};
