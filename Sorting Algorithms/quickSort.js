const pivot = require("./Helpers/pivot");

const quickSort = (arr, left=0, right=arr.length-1) => {
    if(left < right) {
        let pindex = pivot(arr, left, right);

        quickSort(arr, left, pindex-1);
        quickSort(arr, pindex+1, right);
    }

    return arr;
};

console.log( quickSort([1,6,2,7,-1,45,-4,34,1000,87,3,8,1,3]) );