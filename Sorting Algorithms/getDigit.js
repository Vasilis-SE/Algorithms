const getDigit = (num, place) => {
    return Math.floor( Math.abs(num) / Math.pow(10, place) ) % 10;
}