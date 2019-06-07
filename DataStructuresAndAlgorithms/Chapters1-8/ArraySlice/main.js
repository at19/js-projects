"use strict";

// Implementation of Array.slice() function from scratch
const arraySlice = (arr, beginIndex, endIndex) => {
    if (!beginIndex && !endIndex) return arr;

    const newArray = [];
    for (let index = beginIndex; index < endIndex; index++) {
        newArray.push(arr[index]);
    }

    return newArray;
};

console.log(arraySlice(["You", "may", "wanna", "go", "to", "bed"], 1, 4));
