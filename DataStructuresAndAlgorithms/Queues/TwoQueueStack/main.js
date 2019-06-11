"use strict";

import Queue from "../main";

// Implementation of a Stack using two Queues
class TwoQueueStack {
    constructor(array) {
        if (array) this.inbox = new Queue(array);
        else this.inbox = new Queue();
        this.outbox = new Queue();
    }
    push(value) {
        this.inbox.enqueue(value);
    }
    pop() {
        if (this.outbox.isEmpty()) {
            let inboxArray = this.inbox.getBuffer();
            for (let index = inboxArray.length - 1; index >= 0; index--) {
                this.outbox.enqueue(inboxArray[index]);
            }
        }
        return this.outbox.dequeue();
    }
}

let stack = new TwoQueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
