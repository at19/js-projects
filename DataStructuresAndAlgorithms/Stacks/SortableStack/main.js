"use strict";

import Stack from "../main";

// Implements a sortable stack
class SortableStack {
    constructor(array) {
        if (array) this.stack = new Stack(array);
        else this.stack = new Stack();
    }

    // Sort stack in descending order
    sortDescending() {
        return new Stack(this.stack.getBuffer().sort((a, b) => b - a));
    }

    // Sort stack in ascending order
    sortAscending() {
        return new Stack(this.stack.getBuffer().sort((a, b) => a - b));
    }
}

let sortableStack = new SortableStack([1, 5, 6, 3, 2, 7]);
console.log(sortableStack.sortDescending());
console.log(sortableStack.sortAscending());
