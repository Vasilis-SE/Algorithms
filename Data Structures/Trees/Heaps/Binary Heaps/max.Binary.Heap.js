const MaxBinaryHeap = require('./max.Binary.Heap.Class');
const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(100);
maxBinaryHeap.insert(19);
maxBinaryHeap.insert(36);
maxBinaryHeap.insert(17);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(25);
maxBinaryHeap.insert(5);
maxBinaryHeap.insert(9);
maxBinaryHeap.insert(15);
maxBinaryHeap.insert(6);
maxBinaryHeap.insert(11);
maxBinaryHeap.insert(13);
maxBinaryHeap.insert(8);
maxBinaryHeap.insert(1);
maxBinaryHeap.insert(4);

console.log(maxBinaryHeap.values);

maxBinaryHeap.insert(48);

console.log(maxBinaryHeap.values);
