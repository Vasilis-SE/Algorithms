/**
 * Function that  a naive way to search pattern of string inside another one.
 * 
 * The Big O Notation of the linear search algorithm is: 
 *      Time Complexity: 
 *          O(n) -> Best Case | Avarage Case | Worst Case ( Because there is always a nested for loop )
 * 
 *      Space Complexity: 
 *          O(1) -> Best Case | Avarage Case | Worst Case
 * 
 * @param {*} str The string to search patterns from.
 * @param {*} substr The pattern to search for.
 */
const naiveStringSearch = (str, substr) => {
    let counter = 0;

    for(let i=0; i<str.length; i++) {
        for(let j=0; j<substr.length; j++) {
            if(str[i+j] !== substr[j]) 
                break;

            if(j === substr.length -1)
                counter++;  
        }
    }

    return counter;
};

console.log( naiveStringSearch("owowomgowomg", "omg") );
