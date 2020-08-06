const swap = require("./swap");

// Not fully optimized
// const bubbleSort = (arr) => {
//     for(let i=arr.length; i>0; i--) {
//         for(let j=0; j<i-1; j++) {
//             if(arr[j] > arr[j + 1])
//                 swap(arr, j, j + 1);
//         }
//     }

//     return arr;
// };

// Fully optimized
const bubbleSort = (arr) => {
    let isSwapped = false;

    for(let i=arr.length; i>0; i--) {
        for(let j=0; j<i-1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwapped = true;
            }
                
        }

        if(!isSwapped) break;
        isSwapped = false;
    }

    return arr;
};

console.log(bubbleSort([5,3,4,1,2]));
console.log(bubbleSort([37,45,8,29,6,17,3]));
console.log(bubbleSort([1,6,15,33,32,26,36,42,45,46,47,48]));