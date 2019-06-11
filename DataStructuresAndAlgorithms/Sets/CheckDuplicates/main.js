"use strict";

// Returns the duplicates in an array
const checkDuplicates = arr => {
    const set = new Set(arr);
    return set.size !== arr.length;
};

console.log(checkDuplicates([1, 2, 2, 2, 3, 4, 5, 6]));
