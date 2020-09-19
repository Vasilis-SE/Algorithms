/**
 * Insertion sort implementation algorithm. This algorithm sorts the left side of a list of items
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(n^2) -> Best Case | Avarage Case | Worst Case 
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case | Worst Case
 * 
 * Example:
 *      Input: [ 5 , 3 , 4 , 1 , 2 ] Make i the current value.
 *                   i
 *      
 *      Repeat the 2nd loop for the left side of the list as long as j is bigger than 0 and the second pointer
 *      is bigger than the current value.
 * 
 *      Step 1: [ 5 , 3 , 4 , 1 , 2 ]
 *                j   i
 * 
 *      Step 2: [ 3 , 5 , 4 , 1 , 2 ]
 *                    j   i
 *     
 *      Step 3: [ 3 , 4 , 5 , 1 , 2 ] 
 *                j       i
 * 
 *      Continue with the process.
 */
const insertionSort = (arr) => {
    for(var i=1; i<arr.length; i++) {
        let curVal = arr[i];

        for(var j=i-1; j>=0 && arr[j] > curVal; j--) 
            arr[j+1] = arr[j];
        
        arr[j+1] = curVal;
    }

    return arr;
};

console.log(insertionSort([5,3,4,1,2]));
console.log(insertionSort([37,45,8,29,6,17,3]));
console.log(insertionSort([1,6,15,33,32,26,36,42,45,46,47,48]));