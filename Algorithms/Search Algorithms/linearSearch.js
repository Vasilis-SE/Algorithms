/**
 * Function that implements linear search. This algorithm is the basic algorithm for searching 
 * it iterates an array from the beginning until the end to find the search value.
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(1) -> Best Case ( If the search value is the first in the array )
 *          O(n) -> Avarage Case | Worst Case
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case | Worst Case
 * 
 * @param {*} arr List of data search from.
 * @param {*} rnum The number to search for in the list.
 */
const linearSearch = (arr, rnum) => {
    for(let i in arr)
        if(arr[i] === rnum) return parseInt(i);
    
    return -1
};

const randArr = [];
const randNum = Math.floor(Math.random() * 1000);
for(let i=0; i<500; i++) { randArr.push(Math.floor(Math.random() * 1000)); }

console.log( randArr );
console.log( `Tring to find ${randNum} results: ${linearSearch(randArr, randNum)}` );
