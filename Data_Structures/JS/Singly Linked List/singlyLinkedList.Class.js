let Node = require('./node.Class');

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    display() {
        if(!this.head) { return console.log("Empty"); }

        let displayString = "";
        let current = this.head;
        for(let i=0; i<this.length; i++) {
            displayString += ` | ${i} > ${current.val} | `;
            current = current.next;
            if(current) displayString += ` => `;
        }
        console.log(displayString);
    }

    push(val) {
        let node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined; 

        let current = this.head;
        let pre = current; // The previous item.
        while(current.next) {
            pre = current;
            current = current.next; // Iterate the next value of each node from the node.
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift() {
        if(!this.head) return undefined; 
        let previousHead = this.head;
        this.head = previousHead.next;
        this.length--;
        
        if(this.length === 0) 
            this.tail = null;

        return previousHead;
    }

    unshift(val) {
        let newHead = new Node(val);

        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++;
        return this;
    }

    get(index) {
        if(index >= this.length || index < 0) return null;

        let current = this.head;
        for(let i=0; i<index; i++) {
            current = current.next;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if(!foundNode) return false;
        foundNode.val = val;
        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val); // This is the same as unshift
        if(index === this.length) return this.push(val); // This is the same as push
            
        let newNode = new Node(val);
        let oldNode = this.get(index);
        let previousNode = this.get(index - 1);

        previousNode.next = newNode;
        newNode.next = oldNode;
        this.length++;
        
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;

        if(index === 0) return this.shift(); // If the index is 0 is the same with shift.
        if(index === (this.length - 1)) return this.pop();

        let nodeToRemove = this.get(index);
        let previousNode = this.get(index - 1);

        previousNode.next = nodeToRemove.next;
        this.length--;

        return nodeToRemove;
    }

    reverse(current = this.head) {
        if(!current) return true;

        this.reverse(current.next);
        this.push(current.val);
        this.shift();
    }

}

module.exports = SinglyLinkedList;
