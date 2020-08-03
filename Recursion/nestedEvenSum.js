const nestedEvenSum = (obj) => {
    let sum = 0;
    
    if(Object.keys(obj).length === 0) return sum;

    if(typeof obj[Object.keys(obj)[0]] === 'number' && obj[Object.keys(obj)[0]] % 2 === 0) sum += obj[Object.keys(obj)[0]];
    else if(typeof obj[Object.keys(obj)[0]] === 'object') sum += nestedEvenSum(obj[Object.keys(obj)[0]]);
        
    delete obj[Object.keys(obj)[0]];
    return sum += nestedEvenSum(obj);
};

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
  
const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log( nestedEvenSum(obj1) ); // 6
console.log( nestedEvenSum(obj2)); // 10
  