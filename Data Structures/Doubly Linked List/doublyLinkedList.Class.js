let Node = require('./node.Class');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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

}