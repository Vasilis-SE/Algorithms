/**
 * Function that finds the biggest sum of a subarray given its length.
 * 
 * @param {*} arr 
 * @param {*} len 
 */

const maxSubarraySum = (arr, len) => {
    if(arr.length === 0 || arr.length < len) return null;
    
    let maxSum = 0;
    let tempSum = 0;
    
    for(let i=0; i<len; i++)
        maxSum += arr[i];
    
    tempSum = maxSum;

    for(let i=len; i<arr.length; i++) {
        tempSum = tempSum - arr[i - len] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

console.log( maxSubarraySum([100, 200, 300, 400], 2) );
console.log( maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) );
console.log( maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) );
console.log( maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) );
console.log( maxSubarraySum([2, 3], 3) );