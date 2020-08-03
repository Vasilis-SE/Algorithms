const capitalizedWords = (arr) => {
    if(arr[0] === arr[0].toUpperCase()) return arr;
    arr.push( arr[0].toUpperCase() );
    return capitalizedWords( arr.splice(1, arr.length) );
};

console.log( capitalizedWords(['i', 'am', 'learning', 'recursion']) );
