const Node = require('./bst.node.Class');
const Queue = require('../../../Queue/queue.class');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return true;
        }
       
        let currentNode = this.root;
        while(true) {
            if(newNode.value > currentNode.value) { // Going Right
                
                if(currentNode.right) {
                    currentNode = currentNode.right;
                } else { 
                    currentNode.right = newNode;
                    break;
                }

            } else if(newNode.value < currentNode.value) { // Going Left
                
                if(currentNode.left) {
                    currentNode = currentNode.left;
                } else { 
                    currentNode.left = newNode;
                    break;
                }

            } else { // Is equal so it already exists
                return false;
            }
        }

        return true;
    }

    find(value) {
        if(!this.root) return false;
        
        let currentNode = this.root;
        while(currentNode) {
            if(value === currentNode.value) // Is equal so it already exists
                return currentNode;
            else if (value > currentNode.value) // Move to the right
                currentNode = currentNode.right;
            else  // Move to the left
                currentNode = currentNode.left;
        } 
    }

    bfs() { // Breadth First Search
        const queue = new Queue();
        const visited = [];

        queue.enqueue(this.root);
        while(queue.size > 0) {
            let tempNode = queue.dequeue();
            visited.push(tempNode.value.value);

            if(tempNode.value.left) queue.enqueue(tempNode.value.left);
            if(tempNode.value.right) queue.enqueue(tempNode.value.right);
        }

        return visited;
    }

    dfs_preorder() {
        const visited = [];

        const traverse = (node) => {    
            visited.push(node.value);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        };
        traverse(this.root);

        return visited;
    }

    dfs_postorder() {
        const visited = [];

        const traverse = (node) => {    
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        };
        traverse(this.root);

        return visited;
    }

    dfs_inorder() {
        const visited = [];

        const traverse = (node) => {    
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        };
        traverse(this.root);

        return visited;
    }

}

module.exports = BinarySearchTree;