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

}

module.exports = MaxBinaryHeap;