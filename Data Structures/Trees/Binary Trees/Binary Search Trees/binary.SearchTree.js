const BinarySearchTree = require('./binary.SearchTree.Class');
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(6);
bst.insert(2);
bst.insert(45);
bst.insert(81);
console.log(bst);

console.log(bst.find(12));