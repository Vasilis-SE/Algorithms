const swap = require("./Helpers/swap");

const selectionSort = (arr) => {
    for(let i=0; i<arr.length; i++) {
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIndex]) 
                minIndex = j
        }

        if(i !== minIndex) swap(arr, i, minIndex);
    }

    return arr;
};

console.log(selectionSort([5,3,4,1,2]));
console.log(selectionSort([37,45,8,29,6,17,3]));
console.log(selectionSort([1,6,15,33,32,26,36,42,45,46,47,48]));