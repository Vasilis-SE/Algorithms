const swap = require("./swap");

const pivot = (arr, start=0, ei=arr.length-1) => {
    let pivot = arr[start];
    let pivotIndex = start;

    for(let i=start+1; i<arr.length; i++) {
        if(pivot > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    } 

    swap(arr, start, pivotIndex);
    return pivotIndex;
};

module.exports = pivot;


