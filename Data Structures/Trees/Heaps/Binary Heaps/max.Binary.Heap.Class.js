class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    swap (arr, idx1, idx2) {
        [ arr[idx1], arr[idx2]  ] = [ arr[idx2], arr[idx1]  ];
    }

    insert(value) {
        this.values.push(value);

        // Bubbling Up - Moving new value constantly to the top replacing its parents 
        // only if the it is bigger than them.
        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1)/2 );

        while(this.values[parentIndex] < this.values[index]) { 
            this.swap(this.values, parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor( (index - 1)/2 );
        }

        return this.values;
    }

    extractMax() {
        if(this.values.length === 0) return false;
        this.swap(this.values, 0, (this.values.length - 1));
        this.values.pop();        
        let parentIndex = 0;

        // Sinking smaller node down in the heap.
        while(true) {
            let leftChildIdx = 2 * parentIndex + 1;
            let rightChildIdx = 2 * parentIndex + 2;

            if(this.values[parentIndex] < this.values[leftChildIdx] && this.values[leftChildIdx] > this.values[rightChildIdx]) {
                this.swap(this.values, parentIndex, leftChildIdx);
                parentIndex = leftChildIdx;
            } else if(this.values[parentIndex] < this.values[rightChildIdx] && this.values[leftChildIdx] < this.values[rightChildIdx]) {
                this.swap(this.values, parentIndex, rightChildIdx);
                parentIndex = rightChildIdx;
            } else {
                break;
            }   
        }

        return this.values;
    }

}


module.exports = MaxBinaryHeap;