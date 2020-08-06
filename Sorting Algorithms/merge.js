const merge = (arr1, arr2) => {
    let result = [];
    let p1 = 0;
    let p2 = 0;

    while( (p1 < arr1.length) && (p2 < arr2.length) ) {
        if(arr1[p1] < arr2[p2]) {
            result.push(arr1[p1]);
            p1++;
        } else {
            result.push(arr2[p2]);
            p2++;
        }
    }
    
    if(p1 !== arr1.length) 
        result.push(...arr1.splice(p1, arr1.length)); 
    
    if(p2 !== arr2.length) 
        result.push(...arr2.splice(p2, arr2.length)); 
    
    return result;
};

module.exports = merge;