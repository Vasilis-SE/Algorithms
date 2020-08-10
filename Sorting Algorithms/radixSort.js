/**
 * Implementation of the radix sort algorithm. This algorithm uses a bucket method in order to order the data
 * and re assembles the array the same way the buckets stored them.
 * 
 * Explanation:
 *      First of all we create a list of 9 buckets from 0 to 9 and we find the biggest value in our list.
 * 
 *      Input: [3,145,8] 145 is the biggest value with the most digits
 * 
 *      Parse for every digit of the biggest number and make a second nested loop which iterated the nth digit of each number in the list.
 *      If a number does not have the nth digit the asum it is zero. Then based on the nth digit add the number to the appropriate bucket.
 *      
 *      145 biggest number with 3 digits
 *      1st digit loop
 * 
 *         0    1    2    3    4      5     6    7     8    9
 *      |    |    |    |     |    |      |     |    |     |    |
 *      |    |    |    |  3  |    |  145 |     |    |  8  |    | 
 *      --------------------------------------------------------
 *      
 *      Reconstruct from the first bucket until the last: [3, 145, 8]
 *      2nd digit loop, 3 and 8 dont have a second digit so they will go to 0
 * 
 *         0    1    2    3      4    5   6   7   8   9
 *      |  8  |    |    |    |      |   |   |   |   |   |
 *      |  3  |    |    |    |  145 |   |   |   |   |   | 
 *      --------------------------------------------------------
 *  
 *      Reconstruct: [3,8,145] The array is sorted but there is one loop left.
 *      3rd digit loop 3 and 8 dont have a third digit so they will go to 0
 *         
 *         0    1     2   3   4   5   6   7   8   9
 *      |  8  |     |   |   |   |   |   |   |   |   |
 *      |  3  | 145 |   |   |   |   |   |   |   |   | 
 *      --------------------------------------------------------
 *      Reconstruct: [3,8,145] 
 * 
 *      Finaly: [3,8,145] 
 */
const radixHelpers = require('./Helpers/radixHelpers');

const radixSort = (arr) => {
    let maxDigits = radixHelpers.mostDigits(arr);

    for(let k=0; k<maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []);

        for(let j=0; j<arr.length; j++) {
            let digit = radixHelpers.getDigit(arr[j], k);
            buckets[digit].push(arr[j]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
};

console.log(radixSort([2,5,16,53,2342,754]));