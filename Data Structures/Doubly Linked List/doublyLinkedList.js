let DoublyLinkedList = require('./doublyLinkedList.Class.js');

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(80);
doublyLinkedList.push(81);
doublyLinkedList.push(82);
doublyLinkedList.display();

// doublyLinkedList.pop();
// doublyLinkedList.display();

// doublyLinkedList.shift();
// doublyLinkedList.display();

// doublyLinkedList.unshift(83);
// doublyLinkedList.display();

// console.log(doublyLinkedList.get(0));
// console.log(doublyLinkedList.get(3));
// console.log(doublyLinkedList.get(45));

console.log(doublyLinkedList.set(0, 100));
console.log(doublyLinkedList.set(45, 100));
doublyLinkedList.display();