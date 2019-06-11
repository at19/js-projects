"use strict";

// NOT FINISHED...

/** Given an array of integers, return a new array such that each element
 * at index 'i' is the product of all the numbers in the original array except the one at 'i'
 */

const unexplainable = array => {
    const subsets = divideIntoSubsetsOfTwo(array);
    const productsTable = {};

    for (const subset of subsets) {
        if (subset.length === 2) {
            const str = subset[0] + "x" + subset[1];
            productsTable[str] = subset[0] * subset[1];
        }
    }

    for (const integer of array) {
    }

    return productsTable;
};

const divideIntoSubsetsOfTwo = array => {
    const subsets = [];
    for (let index = 0; index < array.length; index += 2) {
        if (array[index + 1]) subsets.push([array[index], array[index + 1]]);
        else subsets.push([array[index]]);
        if (array[index - 1]) subsets.push([array[index - 1], array[index]]);
    }
    return new Set(subsets);
};

console.log(unexplainable([2, 2, 3, 9, 9, 9, 9]));
