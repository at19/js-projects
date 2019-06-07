"use strict";

// Given a matrix, returns it after rotating 90 degrees left
const rotateMatrix90Left = matrix => {
    const result = [];
    let current = [];
    for (let index = 0; index < 3; index++) {
        for (const iterator of matrix) {
            current.push(iterator.pop());
        }
        result.push(current);
        current = [];
    }
    return result;
};

console.log(rotateMatrix90Left([[1, 0, 1], [0, 0, 1], [1, 1, 1]]));
