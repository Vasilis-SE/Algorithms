/**
 * Functions that implement the bubble sort algorithm for sorting data. There are two of those,
 * one is the less optimized way and the other is the fully optimized way.
 * 
 * Bubble sort checks always 2 values at the same time. If the left one is bigger than the right one
 * the swap the two values. At the end of a loop we will have the biggest values sorted at the end of 
 * the list. Repeat this process for the list length minus 1 (Because the last value is always sorted in the end).
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(n^2) -> Best Case | Avarage Case | Worst Case 
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case | Worst Case
 * 
 * 
 * Explanation:
 *      Input: [ 5 , 3 , 4 , 1 , 2 ]
 * 
 *      Step 1: [ 5 , 3 , 4 , 1 , 2 ] Is 5 bigger than 3 ? Then swap
 *                ^   ^           
 *      Step 2: [ 3 , 5 , 4 , 1 , 2 ] Is 5 bigger than 4 ? Then swap
 *                    ^   ^
 *      Step 3: [ 3 , 4 , 5 , 1 , 2 ] Is 5 bigger than 1 ? Then swap
 *                        ^   ^
 *      Step 4: [ 3 , 4 , 1 , 5 , 2 ] Is 5 bigger than 2 ? Then swap
 *                            ^   ^
 *      Step 3: [ 3 , 4 , 1 , 2 , 5 ] End of 1st loop and the 5 is sorted correctly in the end.
 * 
 *      Loop again from the beginning until end - 1
 *                       
 */
const swap = require("./Helpers/swap");

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