let DoublyLinkedList = require('./doublyLinkedList.Class.js');

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.display();

// console.log(doublyLinkedList.get(0));
// console.log(doublyLinkedList.get(1));
// console.log(doublyLinkedList.get(2));
// console.log(doublyLinkedList.get(3));
// console.log(doublyLinkedList.get(4));

// doublyLinkedList.pop();
// doublyLinkedList.display();

// doublyLinkedList.shift();
// doublyLinkedList.display();

// doublyLinkedList.unshift(83);
// doublyLinkedList.display();

// console.log(doublyLinkedList.get(0));
// console.log(doublyLinkedList.get(3));
// console.log(doublyLinkedList.get(45));

// console.log(doublyLinkedList.set(0, 100));
// console.log(doublyLinkedList.set(45, 100));
// doublyLinkedList.display();

// doublyLinkedList.insert(0, 100)
// doublyLinkedList.display();
// doublyLinkedList.insert(2, 110)
// doublyLinkedList.display();

// doublyLinkedList.remove(2)
// doublyLinkedList.display();


console.log(doublyLinkedList.reverse());
console.log(doublyLinkedList.length);
console.log(doublyLinkedList.head.val);
console.log(doublyLinkedList.head.next.val);
console.log(doublyLinkedList.head.next.next.val);
console.log(doublyLinkedList.head.next.next.next.val);
