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

// console.log(maxBinaryHeap.values);
// maxBinaryHeap.insert(48);
// console.log(maxBinaryHeap.values);

// -----------------

console.log("Starting > ", maxBinaryHeap.values );

console.log("1st  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("2nd  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("3rd  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("4th  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("5th  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("6th  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("7th  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("8th  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("9th  Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("10th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("11th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("12th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("13th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("14th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("15th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
console.log("16th Extract > ", JSON.stringify(maxBinaryHeap.extractMax()));
