const HashTable = require('./hashTable.class');
const hashTable = new HashTable();


let collisions = 0;
for ( var i = 0; i < 10; i++) {
    let randomString = Math.random().toString(24).substring(2, 4) + Math.random().toString(24).substring(2, 4);
    hashTable.set(randomString, randomString);
}   

console.log(hashTable.keyMap);