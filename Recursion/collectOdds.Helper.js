const collectOdds = (arr) => {
    let oddNumList = [];

    const collectOddsHelper = (arr) => {
        if(arr.length === 0) return;

        if(arr[0] % 2 === 0)
            oddNumList.push(arr[0]);

        collectOddsHelper(arr.splice(1));
    };

    collectOddsHelper(arr);
    return oddNumList;
};

let randomArr = [];
for(let i=0; i<100; i++) {
    randomArr.push(Math.floor(Math.random() * 1000));
}

console.log("\nInput: ", JSON.stringify(randomArr), "\n");
console.log("Odd Numbers: ", JSON.stringify(collectOdds(randomArr)), "\n");