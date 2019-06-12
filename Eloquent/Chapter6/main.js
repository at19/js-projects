"use strict";

// Exercise 1 - A Vector Type

/**
 * Represents a vector in two-dimensional space
 */

class Vector {
    /**
     * @param {number} x
     * @param {number} y
     */

    constructor(x, y) {
        if (x && y) {
            this.x = x;
            this.y = y;
        } else throw SyntaxError("x and y can't be empty");

        this.length = Math.hypot(this.x, this.y);
    }

    /**
     * Adds a Vector to this Vector and returns it
     * @param {Vector} vector Vector to add
     */
    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    /**
     * Subtrats a Vector from this Vector and returns it
     * @param {Vector} vector Vector to subtract from
     */
    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }
}

// Exercise 2 - A Group Type

/**
 * Represents an array without duplicates
 * (similar to a Set)
 */

class Group {
    /**
     * @param {T[]} array
     */

    constructor(array) {
        if (array) this.elements = Group.from(array);
    }

    /**
     * Returns a Group from 'array'
     * @param {T[]} array
     */

    static from(array) {
        const result = [];
        for (const iterator of array) {
            if (!result.includes(iterator)) result.push(iterator);
        }

        return result;
    }

    /**
     * Checks if the Group includes 'element'
     * @param {T} element
     */

    has(element) {
        if (this.elements.includes(element)) return true;
        return false;
    }

    /**
     * Adds 'element' to the Group, if it already doesn't
     * @param {T} element
     */

    add(element) {
        if (!this.has(element)) this.elements.push(element);
    }

    /**
     * Removes 'element' from the Group, if it has it
     * @param {T} element
     */

    delete(element) {
        if (this.has(element))
            this.elements.splice(this.elements.indexOf(element), 1);
    }

    /**
     * Returns an iterable of values in the Group
     */

    *values() {
        for (const iterator of this.elements) {
            yield iterator;
        }
    }

    /**
     * Iterator
     */

    [Symbol.iterator]() {
        return this.values();
    }
}
