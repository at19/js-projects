"use strict";

// Return the common elements of an array consisting of multiple arrays
var arrays = [[1, 4, 6, 78, 8, 9, 124, 44], [44, 6, 9], [124, 44, 16, 9]];
function getCommonElements(arrays) {
    //Assumes that we are dealing with an array of arrays of integers
    let currentValues = {};
    let commonValues = {};

    for (const iterator of arrays.shift()) {
        currentValues[iterator] = 1; //Doesn't really matter what we set it to
    }

    for (const iterator of arrays) {
        for (const element of iterator)
            if (element in currentValues) commonValues[element] = 1; //Once again, the '1' doesn't matter

        currentValues = commonValues;
        commonValues = {};
    }

    return Object.keys(currentValues).map(value => parseInt(value));
}
console.log(getCommonElements(arrays));
