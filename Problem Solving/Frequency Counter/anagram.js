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
 *  We have 2 strings and we want to check if the second is a anagram of the first.
 *  
 *  So, we construct 2 objects one for every array in which the keys are the values of the array and 
 *  their values is the frequency number.
 *  { 'a': 1, 'b': 2, 'c': 5 }
 *  { 'a': 1, 'b': 2, 'c': 1 }
 * 
 *  After that we parse the first object by its keys and we check for two thing.
 * 
 *  - One if a character of the first string does not exist in the second.
 *  - Two if a character on both string doesnt have same frequency.
 * 
 *  If one of those is incorect then return false else true.
 */

const anagrams = (str1, str2) => {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1) 
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    
    for(let val of arr2) 
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    
    for(let key in freqCounter1) {
        if( !(key in freqCounter2) || freqCounter2[key] !== freqCounter1[key] )
            return false;
    }
    
    return true;
};

const string1 = "textthatneedstobeanagramed";
const string2 = "geanthatedstobenaramteedtx";
let stringAnagramRes = anagrams(string1, string2);

console.log("\n\nString anagrams: ");
console.log("Input");
console.log(`\t ${string1}`);
console.log(`\t ${string2}`);
console.log(`Result: ${stringAnagramRes}\n\n`);