"use strict";

// Exercise 1 - Sum

/**
 * Returns the sum of 'range'
 * @param {number} start
 * @param {number} end
 */

const sum = (start, end) => {
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += index;
    }
    return sum;
};

// Exercise 2 - Reverse an Array

/**
 * Returns a new array which is the reversed of 'array'
 * @param {T[]} array
 */

const reverse = array => {
    const reversed = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reversed.push(array[index]);
    }
    return reversed;
};

// Exercise 3 - Lists

/**
 * Singly Linked List
 */

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Adds 'value' to the LinkedList
     * @param {T} value
     */

    add(value) {
        if (this.head === null) {
            // First Node!
            this.head = new LinkedListNode(value);
        } else {
            // Not the first Node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new LinkedListNode(value);
        }
        this.size++;
    }

    /**
     * Returns a LinkedList from an array
     * @param {T[]} array
     */

    static fromArray(array) {
        const list = new LinkedList();
        for (const iterator of array) {
            list.add(iterator);
        }
        return list;
    }

    /**
     * Returns an array from a LinkedList
     * @param {LinkedList} list
     */

    static toArray(list) {
        let array = [];
        if (list.size === 0) throw RangeError("LinkedList provided was empty.");
        let current = list.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}

/**
 * Singly Linked List Node
 */

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
