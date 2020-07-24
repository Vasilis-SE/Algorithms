/**
 *  Function that finds a pair of numbers that their average while give the second parameter which is a desirable average value.
 *  
 *  @param {*} arr Array that contains numbers must be sorted. 
 *  @param {*} avg The desired average value.
 *  
 *  Solution:
 *      Using 2 pointers on on the begining of the array and one on the end of it calculate every time the avarage of the two.
 *      - If the desired value is found then return true.
 *      - If the calculated average is less than the desired then move the left side pointer
 *      - If the calculated average is bigger than the desired then move the right side pointer
 *  
 */

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