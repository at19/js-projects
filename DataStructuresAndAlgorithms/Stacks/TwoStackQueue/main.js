"use strict";

import Stack from "../main";

// Implementation of a Queue using two Stacks
class TwoStackQueue {
    constructor(array) {
        this.array = [];
        this.outbox = new Stack();
        if (array) this.inbox = new Stack(array);
        else this.inbox = new Stack();
    }

    enqueue(value) {
        return this.inbox.push(value);
    }

    dequeue() {
        if (this.outbox.isEmpty) {
            while (!this.inbox.isEmpty) {
                this.outbox.push(this.inbox.pop());
            }
            return this.outbox.pop();
        }
        return this.outbox.pop();
    }
}
