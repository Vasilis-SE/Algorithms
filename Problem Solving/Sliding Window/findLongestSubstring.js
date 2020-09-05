/**
 *  Functiont tha finds the longest substring in a string with distinct values.
 * 
 *  @param {*} str The string to search.
 * 
 *  Solution:
 *      We need to iterate the string first and check if the i charachter exists on a temp variable. If it does then we need to 
 *      get the part of the string from the duplicate charachter and after.
 * 
 *      Every time we loop we need to check if the length of the temp string that contains the unique characters is bigger than the previous.
 * 
 *  Example:
 *      --------------------------------------------------------------------------------
 *      |    Start    |   Loop 1 (a)  |   Loop 2 (b)  |  Loop 3 (a)   |  Loop 4 (a)    |
 *      |-------------|---------------|---------------|---------------|----------------|
 *      | Input: abac | Input: abac   | Input: abac   | Input: abac   | Input: abac    |
 *      | max: 0      | max: 1        | max: 2        | max: 2        | max: 3         |
 *      | tempStr: '' | tempStr: 'a'  | tempStr: 'ab' | tempStr: 'ba' | tempStr: 'bac' |
 *      --------------------------------------------------------------------------------
 *      So the longest substring with distinct values is 3 (bac)
 */
const findLongestSubstring = (str) => {
    if(str.length === 0) return 0;

    let max = 0; 
    let curString = "";
    let i, char, pos;

    for (i = 0; i < str.length; i += 1) {
        char = str.charAt(i);
        pos = curString.indexOf(char);
        if (pos !== -1) {
            curString = curString.substr(pos + 1);
        }

        curString += char;
        max = Math.max(max, curString.length);
    }

    return curString;
};

console.log( `Empty = `, findLongestSubstring('') );
console.log( `rithmschool = `, findLongestSubstring('rithmschool') );
console.log( `thisisawesome = `, findLongestSubstring('thisisawesome') );
console.log( `thecatinthehat = `, findLongestSubstring('thecatinthehat') );
console.log( `bbbbbb = `, findLongestSubstring('bbbbbb') );
console.log( `longestsubstring = `, findLongestSubstring('longestsubstring') );
console.log( `thisishowwedoit = `, findLongestSubstring('thisishowwedoit') );