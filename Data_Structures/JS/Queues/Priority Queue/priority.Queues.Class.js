const PriorityQueueNode = require('./priority.Queue.Node.Class');

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap (arr, idx1, idx2) {
        [ arr[idx1], arr[idx2]  ] = [ arr[idx2], arr[idx1]  ];
    }

    enqueue(val, pri) {
        let newNode = new PriorityQueueNode(val, pri);
        this.values.push(newNode);

        let index = this.values.length - 1;
        let element = this.values[index];

        // Compare the current elements priority with its parent and swap those two only if 
        // the current elements priority number is less the its parent (so it has more priority
        // 1: Max priority, 2: Strong priority ...) 
        while(index > 0) { 
            let parentIndex = Math.floor( (index - 1)/2 );
            let parentEle = this.values[parentIndex];
            if(element.priority >= parentEle.priority) break;
            this.swap(this.values, parentIndex, index);
            index = parentIndex;
        }

        return this.values;
    }

    dequeue() {
        if(this.values.length === 0) return false;
        this.swap(this.values, 0, (this.values.length - 1));
        let dequeuedElement = this.values.pop();        
        let parentIndex = 0;
        let parentElement = this.values[parentIndex];

        // Sinking smaller node down in the heap.
        let leftChildIdx = 2 * parentIndex + 1;
        let rightChildIdx = 2 * parentIndex + 2;
        let lChEle = this.values[leftChildIdx];
        let rChEle = this.values[rightChildIdx];
        while(
            (leftChildIdx < this.values.length && lChEle.priority < parentElement.priority) ||
            (rightChildIdx < this.values.length && rChEle.priority < parentElement.priority)
        ) {
            if(parentElement.priority > lChEle.priority && lChEle.priority <= rChEle.priority) {
                this.swap(this.values, parentIndex, leftChildIdx);
                parentIndex = leftChildIdx;
            } 

            if(parentElement.priority > rChEle.priority && lChEle.priority > rChEle.priority) {
                this.swap(this.values, parentIndex, rightChildIdx);
                parentIndex = rightChildIdx;
            }

            leftChildIdx = 2 * parentIndex + 1;
            rightChildIdx = 2 * parentIndex + 2;
            lChEle = this.values[leftChildIdx];
            rChEle = this.values[rightChildIdx];
        }

        return dequeuedElement;
    }
}

module.exports = PriorityQueue;