const minSubArrayLen = (arr, num) => {
    if(arr.length === 0) return 0;

    let left = 0; 
    let right = 1;
    let minLength = Infinity;
    let windowSummary = arr[left] + arr[right];
    
    while(right < arr.length) {

        // If the window summary is greater that the search number the slide the window by incrementing the left side, subtract the previous
        // left side value from the summary of the window and calculate the new minimum length.
        if(windowSummary >= num) {
            minLength = Math.min(minLength, (right - left + 1));
            windowSummary -= arr[left];
            left++;
        } else {
            right++;
            windowSummary += arr[right]
        }
    }

    // If minLength never changed form the initial value the no minimum sub array length found and return 0 else the minLength found.
    return minLength === Infinity ? 0 : minLength;
};

console.log( minSubArrayLen([2,3,1,2,4,3], 7) );
console.log( minSubArrayLen([2,1,6,5,4], 9) );
console.log( minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) );
console.log( minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) );
console.log( minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) );
console.log( minSubArrayLen([4,3,3,8,1,2,3], 11) );
console.log( minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) );