"use strict";

// Returns all unique values from seperate arrays
const uniqueList = (firstArr, secondArr) => {
    return Array.from(new Set(firstArr.concat(secondArr)));
};

console.log(uniqueList([1, 2, 2, 3, 3, 4, 5], [6, 6, 7, 8, 8, 8, 9]));
