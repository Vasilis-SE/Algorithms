
const hasOddNumbers = (arr = []) => {
    console.log("> ", JSON.stringify(arr));

    if(arr.length === 0) return console.log("Array contains only odd numbers");

    if(arr[0] % 2 == 0) {
        arr.shift()
        hasOddNumbers(arr);
    } else {
        return console.log("Array doesnt contain only odd numbers");
    }
};

console.log("\n--------------------\n");
console.log("Input: ", [100, 200, 300, 400])
hasOddNumbers([100, 200, 300, 400]);

console.log("\n--------------------\n");
let randomArr = [];
for(let i=0; i<50; i++) {
    randomArr.push(Math.floor(Math.random() * 1000));
}
console.log("Input: ", JSON.stringify(randomArr))
hasOddNumbers(randomArr);
console.log("\n");
