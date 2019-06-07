"use strict";

// Check if 'arr' has two elements that add up to 'weight'
// and if so return those elements
// if not, return -1
const checkSum = (arr, weight) => {
    for (const iterator of arr) {
        const difference = weight - iterator;
        if (arr.indexOf(difference) !== -1)
            return [parseInt(iterator), difference];
    }
    return -1;
};

console.log(checkSum([1, 2, 3, 4, 5], 9));
