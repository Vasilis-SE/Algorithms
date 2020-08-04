const linearSearch = (arr, rnum) => {
    for(let i in arr)
        if(arr[i] === rnum) return parseInt(i);
    
    return -1
};

const randArr = [];
const randNum = Math.floor(Math.random() * 1000);
for(let i=0; i<500; i++) { randArr.push(Math.floor(Math.random() * 1000)); }

console.log( randArr );
console.log( `Tring to find ${randNum} results: ${linearSearch(randArr, randNum)}` );
