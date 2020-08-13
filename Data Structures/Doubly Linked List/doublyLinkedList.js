let DoublyLinkedList = require('./doublyLinkedList.Class.js');

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(80);
doublyLinkedList.push(81);
doublyLinkedList.push(82);
doublyLinkedList.display();

doublyLinkedList.pop();
doublyLinkedList.display();

doublyLinkedList.shift();
doublyLinkedList.display();