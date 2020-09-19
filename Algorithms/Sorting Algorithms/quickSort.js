/**
 * Quick sort is an algorithm that selects a pivot in the array or part of the array (we select the start and the end of it)
 * if the pivot is greater than the value of the nth item the increment the pivot index and swap those values. In the end return
 * the pivot index and call recursively the function for the left part and the right part of the list based on the pivot that
 * returned.
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(n log n) -> Best Case | Avarage Case
 *          O(n^2) -> Worst Case 
 *  
 *      Space Complexity: 
 *          O(n) -> Best Case | Avarage Case | Worst Case 
 */
const pivot = require("./Helpers/pivot");

const quickSort = (arr, left=0, right=arr.length-1) => {
    if(left < right) {
        let pindex = pivot(arr, left, right);

        quickSort(arr, left, pindex-1);
        quickSort(arr, pindex+1, right);
    }

    return arr;
};

console.log( quickSort([1,6,2,7,-1,45,-4,34,1000,87,3,8,1,3]) );