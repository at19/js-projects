"use strict";

// Implementation of a Stack
export default class Stack {
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
        return this.array[this.array - 1];
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        return this.array.pop();
    }

    access(n) {
        if (n <= 0) throw "error";

        while (--n !== 0) this.pop();

        return this.pop();
    }

    search(element) {
        while (!this.isEmpty()) if (this.pop() === element) return true;

        return false;
    }
}
