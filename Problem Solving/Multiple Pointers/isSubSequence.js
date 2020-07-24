/**
 *  Function that checks if a string is a sub sequence of a second. The sequence is important, that means that
 *  if we have a string `abc` and another `agrbtttuwc` the that will return true because the sequence a->b->c
 *  has been found on the same order on the second array: agrbtttuwc
 *                                                        ^  ^     ^
 * 
 *  @param {*} s1 The first string.
 *  @param {*} s2 The second string.
 *  
 *  Solutions:
 *      Parse the charachters of the second string and if the looped character exists on the same place on the
 *      second string the move to the next one and check if the end of the string is reached if so return true.
 */

const isSubsequence = (s1, s2) => {
    if(!s1) return true

    let i = 0;
    for(let s2c of s2) {
        if(s2c === s1[i]) {
            i++;

            if(i === s1.length) 
                return true;
        }
    }

    return false;
};

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));