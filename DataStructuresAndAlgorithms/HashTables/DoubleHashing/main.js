"use strict";

// Example of a Hash Table using Linear Probing
class HashTable {
    constructor(size) {
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }

    put(key, value) {
        if (this.limit >= this.size) throw "hash table is full";

        let hashedIndex = this.hash(key);

        while (this.keys[hashedIndex]) {
            hashedIndex++;

            hashedIndex = hashedIndex % this.size;
        }

        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    get(key) {
        let hashedIndex = this.hash(key);

        while (this.keys[hashedIndex] !== key) {
            hashedIndex++;

            hashedIndex = hashedIndex % this.size;
        }

        return this.values[hashedIndex];
    }

    hash(key) {
        // Check if 'int'
        if (!Number.isInteger(key)) throw "must be int";

        return this.secondHash(key % this.size);
    }

    secondHash(hashedKey) {
        let R = this.size - 2;
        return R - (hashedKey % 2);
    }

    initArray(size) {
        let array = [];
        for (let index = 0; index < size; index++) {
            array.push();
        }
        return array;
    }
}

let exampleTable = new HashTable(13);
exampleTable.put(7, "hi");
exampleTable.put(20, "hello");
exampleTable.put(33, "sunny");
exampleTable.put(46, "weather");
exampleTable.put(59, "wow");
exampleTable.put(72, "forty");
exampleTable.put(85, "happy");
exampleTable.put(98, "sad");

console.log(exampleTable);
