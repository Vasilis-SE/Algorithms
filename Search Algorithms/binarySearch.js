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