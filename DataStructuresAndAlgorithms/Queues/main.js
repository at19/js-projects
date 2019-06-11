"use strict";

// Implementation of a Queue
export default class Queue {
    constructor(array) {
        this.array = [];
        if (array) this.array = array;
    }

    getBuffer() {
        return this.array.slice();
    }

    isEmpty() {
        return this.array.length === 0;
    }

    peek() {
        return this.array[0];
    }

    enqueue(value) {
        return this.array.push(value);
    }

    dequeue() {
        return this.array.shift();
    }

    access(n) {
        if (n <= 0) throw "error";

        while (--n !== 0) this.dequeue();

        return this.dequeue();
    }

    search(element) {
        while (!this.isEmpty()) if (this.dequeue() === element) return true;
        return false;
    }
}
