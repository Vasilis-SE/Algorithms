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

    return max;
};

console.log( findLongestSubstring('') );
console.log( findLongestSubstring('rithmschool') );
console.log( findLongestSubstring('thisisawesome') );
console.log( findLongestSubstring('thecatinthehat') );
console.log( findLongestSubstring('bbbbbb') );
console.log( findLongestSubstring('longestsubstring') );
console.log( findLongestSubstring('thisishowwedoit') );