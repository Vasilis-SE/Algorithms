const areThereDuplicates = (p1=null, p2=null, p3=null, p4=null) => {
    let arr = p4 === null ? [p1, p2, p3].sort() : [p1, p2, p3, p4].sort();
    
    let i = 0;
    let j = 1;
    
    while(i < arr.length) {
        if(i === j) return false;
        if(arr[i] === arr[j]) return true;
         
        if(j === (arr.length - 1)) {
            i++;
            j = typeof arr[i + 1] !== 'undefined' ? (i + 1) : i;
        } else {
            j++;
        } 
    }

    return false;
};

let c1 = areThereDuplicates(1, 2, 3);
let c2 = areThereDuplicates(1, 2, 2);
let c3 = areThereDuplicates('a', 'b', 'c', 'a');

console.log(c1);
console.log(c2);
console.log(c3);