
/**
 *  Multiple Pointers problem solving pattern focuses on using multiple pointers that correspond to an index or 
 *  position and move towards the beginning, the end, the middle based on some conditions. It is a very efficient
 *  way for solving problems with minimal space complexity. 
 * 
 *  O(n) time complexity
 *  O(1) space complexity (Auxilary Space Complexity)
 *  
 *  Example:
 *      We have a sorted array and we want to find out the number of unique numbers. By using 2 pointer one index
 *      and one scout pointer we rearange the unique numebers at the begining of the array. When the two values
 *      that the pointers are places are the same we move the scouting pointer else we move the index pointer and
 *      we change the next cell`s value to what the scouting pointer is looking at.
 * 
 *               i 
 *      Step 1: [1,2,3,4,4,4,7,7,12,12,13] => i != j, so move i to the next place and change its value to what j is.
 *                 j
 * 
 *                 i 
 *      Step 1: [1,2,3,4,4,4,7,7,12,12,13] => i == j, so move j.
 *                 j
 * 
 *      ...
 *                             i
 *      Result: [1,2,3,4,7,12,13,7,12,12,13] => So the i is at 6 place [1,2,3,4,7,12,13] are the unique values and the number of unique is 7
 *                                        j
 */
const countUniqueValues = (arr) => {
    if(arr.length == 1) return console.error('Invalid array given. Needs to have at least 2 values');
    
    let indexPointer = 0;
    let scoutPointer = 1;
    while(scoutPointer < arr.length) {
        if(arr[ indexPointer ] === arr[ scoutPointer ]) {
            scoutPointer++;
        } else {
            indexPointer++;
            arr[ indexPointer ] = arr[ scoutPointer ];
        }
    }

    return indexPointer + 1;
};

const sortedArr = [1,2,3,4,4,4,7,7,12,12,13];
const uniqueValRes = countUniqueValues(sortedArr);

console.log(`\n\nInput: ${sortedArr}`);
console.log(`Result: ${uniqueValRes}\n\n`);