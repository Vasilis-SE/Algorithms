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