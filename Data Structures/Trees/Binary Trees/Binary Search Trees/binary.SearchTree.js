const BinarySearchTree = require('./binary.SearchTree.Class');
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.dfs_preorder());
console.log(bst.dfs_postorder());
console.log(bst.dfs_inorder());
