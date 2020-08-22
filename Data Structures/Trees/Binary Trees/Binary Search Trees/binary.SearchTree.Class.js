const Node = require('./node.Class');

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
        while(true) {
            if(value === currentNode.value) { // Is equal so it already exists
                return currentNode;
            } else if (value > currentNode.value) { // Move to the right
                if(!currentNode.right) return false;
                currentNode = currentNode.right;
            } else { // Move to the left
                if(!currentNode.left) return false;
                currentNode = currentNode.left;
            }
        } 
    }


}

module.exports = BinarySearchTree;