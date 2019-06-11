"use strict";

// Implementation of a Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(value) {
        let newNode = new SinglyLinkedListNode(value);

        // Check if first node
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    removeAtIndex(index) {
        if (this.head === null || index < 0) {
            throw new RangeError(
                "Index " + index + " doesn't exist in the list."
            );
        }

        if (index === 0) {
            const data = this.head.data;
            this.head = this.head.next;
            return data;
        }

        let current = this.head;
        let previous = null;
        let i = 0;

        while (current && i < index) {
            previous = current;
            current = current.next;
            i++;
        }

        if (current) {
            previous.next = current.next;
            return current.data;
        }

        throw new RangeError("Index " + index + " doesn't exist in the list.");
    }

    get(index) {
        if (index > -1) {
            let current = this.head;
            let i = 0;
            while (current.next && i < index) {
                current = current.next;
                i++;
            }
            return current ? current.data : undefined;
        }
        return undefined;
    }

    *values() {
        let current = this.head;
        while (current) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }
}

class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const list = new SinglyLinkedList();

list.insert(1);
list.insert(10);
list.insert(100); // 100 -> 10 -> 1 -> null

for (const number of list) {
    console.log(number);
}

console.log(list.removeAtIndex(0));

console.log(list.get(0));
