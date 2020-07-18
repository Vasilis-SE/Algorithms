/**
 * Frequency Counter Pattern is used to collect values or frequencies or values.
 * It uses objects or arrays to collect those frequecies. It can be used to solve 
 * multiple problems and avoid nested loops which have O(n^2) complexity.
 * 
 *  - Search array items in another array
 *  - Find if a string is anagram
 *  - Same frequency of digits
 * 
 * Example:
 *  We have 2 arrays [1, 2, 3, 2], [9, 1, 4, 4] and we want to check whether the squared values
 *  of the first array exist in the second. Frequency is necessary, we cannot have different 
 *  length of values.
 *  
 *  So, we construct 2 objects one for every array in which the keys are the values of the array and 
 *  their values is the frequency number.
 *  { '1': 1, '2': 2, '3': 1 }
 *  { '1': 1, '4': 2, '9': 1 }
 * 
 *  After that we parse the first object by its keys and we check for two thing.
 * 
 *  - One if the squared key of the first array exists as a key in the second for example in 
 *  the case of 2 does 4 exist as a key in the second object ?
 * 
 *  - Two if the squared key exists in the second object does the frequency number between the two
 *  is the same?
 * 
 *  If one of those is incorect then return false else true.
 */

const same = (arr1=[], arr2=[]) => {
    if(arr1.length !== arr2.length) 
        return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1) 
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    
    for(let val of arr2) 
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    
    console.log(freqCounter1);
    console.log(freqCounter2);


    for(let key in freqCounter1) {
        if( !(key ** 2 in freqCounter2) )
            return false;

        if(freqCounter2[key ** 2] !== freqCounter1[key])
            return false;
    }
    
    return true;
};

const anagrams = (arr1=[], arr2=[]) => {
    if(arr1.length !== arr2.length) 
        return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1) 
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    
    for(let val of arr2) 
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    
    for(let key in freqCounter1) {
        if( !(key in freqCounter2) )
            return false;

        if(freqCounter2[key] !== freqCounter1[key])
            return false;
    }
    
    return true;
};

const array1 = [1, 2, 3, 2];
const array2 = [9, 1, 4, 4];
let sameArrayRes = same(array1, array2);

const string1 = "textthatneedstobeanagramed";
const string2 = "geanthatedstobenaramteedtx";
let stringAnagramRes = anagrams(string1.split(''), string2.split(''));

console.log("===========================================");
console.log("Same arrays: ");
console.log("Input");
console.log(`\t ${array1}`);
console.log(`\t ${array2}`);
console.log(`Result: ${sameArrayRes}`);

console.log("===========================================");
console.log("String anagrams: ");
console.log("Input");
console.log(`\t ${string1}`);
console.log(`\t ${string2}`);
console.log(`Result: ${stringAnagramRes}`);