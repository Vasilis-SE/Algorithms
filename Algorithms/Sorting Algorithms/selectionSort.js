/**
 * Selection sort is similar with bubble sort in some ways. It loops a list of data keeps the i 
 * as the minimum value and iterates the rest of the list. Check every time if if the value you are looking for
 * in the second loop is less than the one that is currently the minimum and if it is then replace it. 
 * When the second loop finished then swap the outer loop pointer with the one in the minimum value.
 * That way at the end of the loop the first item in the list will always be sorerted.
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(n^2) -> Best Case | Avarage Case | Worst Case 
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case | Worst Case
 * 
 * Explanation:
 *               v
 *      Input: [ 5 , 3 , 4 , 1 , 2 ] Make 5 the current minimum
 *               i
 * 
 *                v
 *      Step 1: [ 5 , 3 , 4 , 1 , 2 ] Is 3 less than the current minimum ? Yes, Then change the value of the current minimum
 *                i   j
 * 
 *                    v
 *      Step 2: [ 5 , 3 , 4 , 1 , 2 ] Is 4 less than the current minimum ? No
 *                i       j
 * 
 *                    v
 *      Step 3: [ 5 , 3 , 4 , 1 , 2 ] Is 1 less than the current minimum ? Yes, Then change the value of the current minimum
 *                i           j
 * 
 *                            v
 *      Step 4: [ 5 , 3 , 4 , 1 , 2 ] Is 2 less than the current minimum ? No
 *                i               j
 * 
 *      Second loop finished so swap the i with the current value of the minimum item so:
 *      [ 1 , 3 , 4 , 5 , 2 ]
 *      Continue the process...
 * 
 */
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