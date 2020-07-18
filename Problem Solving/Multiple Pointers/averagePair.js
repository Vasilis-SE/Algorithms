const averagePair = (arr, avg) => {
    if(arr.length === 0) return false;
    
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let tmpAvg = (arr[left] + arr[right])/2;

        if(tmpAvg === avg) return true;
        else if(tmpAvg < avg) left++;
        else right--;
    }  

    return false;
};

console.log( averagePair([1,2,3], 2.5) );
console.log( averagePair([1,3,3,5,6,7,10,12,19], 8) );
console.log( averagePair([-1,0,3,4,5,6], 4.1) );
console.log( averagePair([], 4) );