const Node = require('./node.class');

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if(!this.first) { // If stack is empty the put on first and last the new node.
            this.first = newNode;
            this.last = newNode;
        } else {
            let preFirstNode = this.first;
            this.first = newNode;
            this.first.next = preFirstNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if(!this.first) return null;

        let tempFirst = this.first;
        if(this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return tempFirst;
    }

}

module.exports = Stack;