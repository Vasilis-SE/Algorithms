const capitalizeFirst = (arr) => {
    if(arr[0][0] === arr[0][0].toUpperCase()) return arr;
    arr.push(arr[0][0].toUpperCase() + arr[0].substr(1, arr[0].length));
    return capitalizeFirst(arr.splice(1, arr.length))
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']