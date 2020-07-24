
/**
 *  Fuction that checks if there are duplicate values in a arguments list.
 * 
 *  @param  {...any} args List of arguments can be whaterver data type separated by commas.
 *  @returns bool Returns true if the arguments contain duplicate values else false.
 * 
 *  Solution:
 *      First we need to sort the array so that possible duplicated to be next to one another. 
 *      Next using 2 pointer start and next which have initial values 0 and 1. If you find 
 *      a duplicate then return true else move both cursors and loop the whole process while
 *      the 2nd pointer hasnt reached the last argument.
 * 
 *      
 *      Start: [1,2,3,5,6,2]
 *              
 *      Sorted: [1,2,2,3,5,6]
 * 
 *                 i j
 *      1st Loop: [1,2,2,3,5,6]
 *                 
 *                   i j
 *      1st Loop: [1,2,2,3,5,6] -> Return true.
 */
const areThereDuplicates = (...args) => {
    args.sort();
    let start = 0;
    let next = 1;

    while(next < args.length){
        if(args[start] === args[next])
            return true
        
        start++
        next++
    }
    return false
};

let c1 = areThereDuplicates(1, 2, 3);
let c2 = areThereDuplicates(1, 2, 2);
let c3 = areThereDuplicates('a', 'b', 'c', 'a');

console.log(c1);
console.log(c2);
console.log(c3);