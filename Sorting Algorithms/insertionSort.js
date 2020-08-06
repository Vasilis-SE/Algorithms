const insertionSort = (arr) => {
    for(var i=1; i<arr.length; i++) {
        let curVal = arr[i];

        for(var j=i-1; j>=0 && arr[j] > curVal; j--) 
            arr[j+1] = arr[j];
        
        arr[j+1] = curVal;
    }

    return arr;
};

console.log(insertionSort([5,3,4,1,2]));
console.log(insertionSort([37,45,8,29,6,17,3]));
console.log(insertionSort([1,6,15,33,32,26,36,42,45,46,47,48]));