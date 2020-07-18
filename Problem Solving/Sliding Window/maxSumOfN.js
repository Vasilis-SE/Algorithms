
const maxSubarraySum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length === 0) 
        return null;

    // Sum the first n numbers.
    for(let i=0; i<n; i++)
        maxSum += arr[i];
    
    tempSum = maxSum;

    for(let i=n; i<arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

console.log( maxSubarraySum([2,6,9,2,1,8,5,6,3], 3) );