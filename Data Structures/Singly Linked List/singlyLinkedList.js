// let Node = require('./node.Class');
let SinglyLinkedList = require('./singlyLinkedList.Class');

let singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(80);
singlyLinkedList.push(81);
singlyLinkedList.push(82);
singlyLinkedList.push(83);
singlyLinkedList.push(84);
// console.log(singlyLinkedList);

// singlyLinkedList.pop();
// console.log(singlyLinkedList);

// singlyLinkedList.shift();
// console.log(singlyLinkedList);

// singlyLinkedList.unshift(80);
// console.log(singlyLinkedList);
// singlyLinkedList.unshift(81);
// console.log(singlyLinkedList);

// console.log(singlyLinkedList.get(0));
// console.log(singlyLinkedList.get(1));
// console.log(singlyLinkedList.get(16));
// console.log(singlyLinkedList.get(-2));

// console.log(singlyLinkedList.set(-2, 90));
// console.log(singlyLinkedList.set(1, 90));
// console.log(singlyLinkedList);

// console.log(singlyLinkedList.display());
// singlyLinkedList.insert(1, 90);
// console.log(singlyLinkedList.display());
// singlyLinkedList.insert(1, 89);
// console.log(singlyLinkedList.display());

console.log( JSON.stringify(singlyLinkedList)  );
singlyLinkedList.reverse();
console.log( JSON.stringify(singlyLinkedList) );