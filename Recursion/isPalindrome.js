const isPalindrome = (str) => {
    if(str.length === 0) return true;
    if(str.substr(0,1) !== str.substr(str.length - 1)) return false;
    return isPalindrome( str.substr(1, str.length - 2) );
};

console.log( isPalindrome('awesome') ); // false
console.log( isPalindrome('foobar') ); // false
console.log( isPalindrome('tacocat') ); // true
console.log( isPalindrome('amanaplanacanalpanama') ); // true
console.log( isPalindrome('amanaplanacanalpandemonium') ); // false