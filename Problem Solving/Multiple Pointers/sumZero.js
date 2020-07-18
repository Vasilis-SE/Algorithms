/**
 *  Multiple Pointers problem solving pattern focuses on using multiple pointers that correspond to an index or 
 *  position and move towards the beginning, the end, the middle based on some conditions. It is a very efficient
 *  way for solving problems with minimal space complexity. 
 * 
 *  O(n) time complexity
 *  O(1) space complexity (Auxilary Space Complexity)
 *  
 *  Example:
 *      We have a sorted array and we want to find out which pair of numbers if you summarize them to give 0 result.
 *      Lets say we have [-6, -4, -3, -1, 1, 2, 5, 8] array and we use 2 pointers one in the far left and the other 
 *      on the far right.
 * 
 *      if the sum of the 2 is les than 0 then move the left pointer if greater the right one until you find a pair 
 *      that will give 0. If nothing is found then return error.
 * 
 *                i                       j
 *      Step 1: [-6, -4, -3, -1, 1, 2, 5, 8] -> -6 + 8 = 2, move right pointer
 *               
 *                i                    j
 *      Step 2: [-6, -4, -3, -1, 1, 2, 5, 8] -> -6 + 5 = -1, move left pointer
 * 
 *      ...
 *                                i  j
 *      Final Step: [-6, -4, -3, -1, 1, 2, 5, 8] -> -1 + 1 = 0 so the pair that gives 0 is [-1, 1]
 */

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === 0) { // Found pair of numbers that make 0.
            return [ arr[left], arr[right] ];
        } else if(sum < 0) { // If summary is less than zero move left pointer to the right.
            left++;
        } else { // If summary is more than zero move right pointer to the left.
            right--;
        }
    }

    return false;
};

let sortedArr = [-6, -4, -3, -1, 1, 2, 5, 8];
const zeroSumRes = sumZero(sortedArr);

console.log(`\n\nInput: ${sortedArr}`);
console.log(`Result: ${zeroSumRes}\n\n`);