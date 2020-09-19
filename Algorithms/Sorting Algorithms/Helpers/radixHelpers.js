const getDigit = (num, place) => {
    return Math.floor( Math.abs(num) / Math.pow(10, place) ) % 10;
}

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => {
    let maxDigits = 0;
    for(let i=0; i<arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
};

module.exports = {
    getDigit,
    digitCount,
    mostDigits
};