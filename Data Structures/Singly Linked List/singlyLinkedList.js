// let Node = require('./node.Class');
let SinglyLinkedList = require('./singlyLinkedList.Class');

let singlyLinkedList = new SinglyLinkedList();

// singlyLinkedList.push(80);
// singlyLinkedList.push(81);
// console.log(singlyLinkedList);

// singlyLinkedList.pop();
// console.log(singlyLinkedList);

// singlyLinkedList.shift();
// console.log(singlyLinkedList);

singlyLinkedList.unshift(80);
console.log(singlyLinkedList);
singlyLinkedList.unshift(81);
console.log(singlyLinkedList);