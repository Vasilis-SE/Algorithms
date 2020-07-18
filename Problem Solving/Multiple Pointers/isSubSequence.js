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