const productOfArray = (arr) => {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.splice(1));
};

console.log( productOfArray([1,2,3]) );
console.log( productOfArray([1,2,3,10]) );