const PriorityQueue = require('./priority.Queues.Class');
const priorityQueue = new PriorityQueue();


console.log( "Engueue > ", priorityQueue.enqueue("Minor Fever", 5) );
console.log( "Engueue > ", priorityQueue.enqueue("Cuncusion", 3) );
console.log( "Engueue > ", priorityQueue.enqueue("Drunk", 4) );
console.log( "Engueue > ", priorityQueue.enqueue("Broken Arm", 2) );
console.log( "Engueue > ", priorityQueue.enqueue("Back Pain", 4) );

console.log( "Dequeue > ", priorityQueue.dequeue() );
console.log( "Dequeue > ", priorityQueue.dequeue() );
console.log( "Dequeue > ", priorityQueue.dequeue() );
console.log( "Dequeue > ", priorityQueue.dequeue() );