"use strict";

// Given a matrix, prints the elements in a spiral order
var M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

const spiralPrint = M => {
    while (M.length > 0) {
        // Left-Right
        for (let index = M[0].length; index > 0; index--) {
            console.log(M[0].shift());
        }

        M.shift();

        // Top-Down
        for (const iterator of M) {
            console.log(iterator.pop());
        }

        // Right-Left
        for (let index = M[M.length - 1].length; index > 0; index--) {
            console.log(M[M.length - 1].pop());
        }

        M.pop();

        // Down-Top
        for (let index = M.length - 1; index >= 0; index--) {
            console.log(M[index].shift());
        }
    }
};

spiralPrint(M);
