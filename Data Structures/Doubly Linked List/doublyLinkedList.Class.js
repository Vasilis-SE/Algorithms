let Node = require('./node.Class');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    display() {
        let displayString = "";
        let current = this.head;
        for(let i=0; i<this.length; i++) {
            displayString += ` | ${i} > ${current.val} | `;
            if(i !== this.length - 1) displayString += ` <=> `;
            current = current.next;
        }

        console.log(displayString);
    }

    push(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {            
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return false; 

        let oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.previous;
            this.tail.next = null;

            // Sever the connection of the poped node to not point back to the list
            oldTail.previous = null; 
        }
        
        this.length--;
        return oldTail;
    }

    shift() {
        if(!this.head) return false; 
        let oldHead = this.head;

        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.next;

            // Sever the connections of the shifted node and the new node 
            // to not point on the old node and to the new node.
            oldHead.next = null;
            this.head.previous = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newHead = new Node(val);
        let oldHead = this.head;

        newHead.next = oldHead;
        newHead.previous = null;
        oldHead.previous = newHead;
        this.head = newHead;
        
        this.length++;
        return true;
    }

    get(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.head;
        if(index === this.length) return this.tail;

        let current = this.head;
        for(let i=0; i<this.length; i++) {
            if(i === index) return current;
            current = current.next;
        }

        return false;
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
        let nextNode = this.get(index);
        let previousNode = this.get(index - 1);

        newNode.next = nextNode;
        newNode.previous = previousNode;

        previousNode.next = newNode;
        nextNode.previous = newNode;

        return true;
    }


}

module.exports = DoublyLinkedList;