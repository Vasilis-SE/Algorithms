const BinarySearchTree = require('./binary.SearchTree.Class');
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.dfs("PREORDER"));
console.log(bst.dfs("POSTORDER"));
console.log(bst.dfs("INORDER"));




