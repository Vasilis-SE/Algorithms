/**
 * Function that implements the binary search algorithm. 
 * 
 * Binary Search algorithm takes a pivot point in the middle of the array. Since the array is sorted then check
 * if the wanted number is greater than the pivot point then we can discard the left side of the array (bacause
 * the values up until the pivot point is less than the wanted number) and so the wanted number must be in the 
 * right side. Else the wanted number is less than the pivot point then we can descard the right side.
 * 
 * Finaly if the left side reached the right side then all the values are searched.
 * 
 * The Big O Notation of the Binary search algorith is: 
 *      Time Complexity: 
 *          O(1) -> Best Case
 *          O(log n) -> Avarage Case | Worst Case
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case | Worst Case
 * 
 * Example: 
 *      Input: [1,2,3,4,5] | Searching for: 4
 *      
 *      Step 1: [1, 2, 3, 4, 5] = Pivot is 3 and is less descard the left side of the array
 *               l     ^     r
 *      
 *      Step 2: [4, 5] = Pivot is equal with the wanted so stop.
 *               ^  r
 *               l
 * 
 * Tip: 
 *      When finding the pivot point we need to either round up or round down. It doesnt matter as long 
 *      as there is consistency.
 *              
 * @param {*} arr A sorted array to search from.
 * @param {*} num The number to search the array.
 */
const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    let pivot = Math.ceil( (left + right) / 2 );

    while(arr[pivot] !== num && left <= right) {
        if(arr[pivot] > num) 
            right = pivot - 1;
        else 
            left = pivot + 1; 

        pivot = Math.ceil( (left + right) / 2 );
    }
    
    return arr[pivot] === num ? pivot : -1;
};


console.log( binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19], 15)); // 8
console.log( binarySearch([1,2,3,4,5], 2) ); // 1
console.log( binarySearch([1,2,3,4,5], 3) ); // 2
console.log( binarySearch([1,2,3,4,5], 5) ); // 4
console.log( binarySearch([1,2,3,4,5], 6) ); // -1
console.log( binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) ); // 2
console.log( binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) ); // 16
console.log( binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) ); // -1