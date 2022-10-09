const HashTable = require('./hashTable.class');
const hashTable = new HashTable();

// let collisions = 0;
// for ( var i = 0; i < 10; i++) {
//     let randomString = Math.random().toString(24).substring(2, 4) + Math.random().toString(24).substring(2, 4);
//     hashTable.set(randomString, i);
// }   


hashTable.set("maroon", "#800000");
hashTable.set("yellow", "#FFFF00");
hashTable.set("olive", "#808000");
hashTable.set("salmon", "#FA8072");
hashTable.set("lightcoral", "#F08080");
hashTable.set("mediumvioletred", "#C71585");
hashTable.set("plum", "#DDA0DD");
hashTable.set("salmon", "#FA8072");


console.log(hashTable.keyMap);
console.log(hashTable.keys());
