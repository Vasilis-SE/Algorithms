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
            // Sever the connection of the poped node to not point back to the list
            oldHead.next = null;
            this.head = this.head.next;
            this.head.previous = null;
        }

        this.length--;
        return oldHead;
    }

}

module.exports = DoublyLinkedList;