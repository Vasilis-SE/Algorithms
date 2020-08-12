let Node = require('./node.Class');

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
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

}

module.exports = SinglyLinkedList;
