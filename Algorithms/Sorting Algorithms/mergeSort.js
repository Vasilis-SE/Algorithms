/**
 * Merge sort implementation. This algorithm uses recursion to split the list in halves until the
 * length of each individual array is 1 or less. After splitting the list merge the individual
 * pairs and sort them at the same time.
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(n log n) -> Best Case | Avarage Case | Worst Case 
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case 
 *          O(n) -> Worst Case 
 * 
 * Explanation:
 *      Call recursivly the function for the left side and the right side of the array
 * 
 *              [ 2 , 7 , 3, 9 ]
 *                  /     \
 *           [ 2 , 7 ]   [ 3 , 9 ]
 *             /   \       /   \
 *            [2]  [7]    [3]  [9]
 * 
 *      After splitting the array to the individual parts then merge and sort them back together
 * 
 *              [ 2 , 7 , 3, 9 ]
 *                  /     \
 *           [ 2 , 7 ]   [ 3 , 9 ]
 *             /   \       /    \
 *          [2] <-> [7]  [3] <-> [9]
 * 
 *     Merge and sort this [2] with this [7] and this [3] with this [9] so :
 *              
 *             [ 2 , 7 , 3, 9 ]
 *               /           \
 *          [ 2 , 7 ] <-> [ 3 , 9 ]
 * 
 *     Merge and sort this [ 2 , 7 ] with this [ 3 , 9 ] so:
 *      
 *              [ 2 , 3 , 7 , 9 ]
 */
const merge = require("./Helpers/merge");

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);

    let left = mergeSort( arr.slice(0, mid) );
    let right = mergeSort( arr.slice(mid, arr.length) );

    return merge(left, right);
};

console.log( mergeSort([2,5,9,1,9,10,12,453,23]) );
