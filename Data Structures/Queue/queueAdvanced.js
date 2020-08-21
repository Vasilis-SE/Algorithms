const Queue = require('./queue.class');
const queue = new Queue();

queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");
console.log(queue);

console.log("------------");

queue.dequeue();
console.log(queue);

console.log("------------");

queue.dequeue();
console.log(queue);

console.log("------------");

queue.dequeue();
console.log(queue);
