const merge = require("./Helpers/merge");

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);

    let left = mergeSort( arr.slice(0, mid) );
    let right = mergeSort( arr.slice(mid, arr.length) );

    return merge(left, right);
};

console.log( mergeSort([2,5,9,1,9,10,12,453,23]) );
