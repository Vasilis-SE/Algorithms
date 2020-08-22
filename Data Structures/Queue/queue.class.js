const QNode = require('./queue.node.class');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new QNode(value);

        if(!this.first) { // If stack is empty the put on first and last the new node.
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
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

module.exports = Queue;