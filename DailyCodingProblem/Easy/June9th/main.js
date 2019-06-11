"use strict";

// Given a list of numbers and a number 'k', return whether any two numbers from the list add up to 'k'
// Example: [10, 15, 3, 7] and 'k' of 17, return true since 10 + 7 is 17.

const doesItAddUp = (array, k) => {
    for (const iterator of array) {
        const difference = k - iterator;
        if (array.indexOf(difference) !== -1)
            return [parseInt(iterator), difference];
    }
    return -1;
};
