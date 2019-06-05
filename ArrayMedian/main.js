"use strict";

// Return the median of two sorted arrays of the same size

const medianOfTwoSortedArrays = (arrayOne, arrayTwo) => {
    // Function expects two arrays with equal size
    if (arrayOne.length !== arrayTwo.length) return -1;

    // Adds two arrays
    const arraySum = arrayOne.concat(arrayTwo);

    // If 'arraySum' is Odd, return the middle element
    // Or else, return the average of the two elements in the middle
    return arraySum.length % 2
        ? arraySum[arraySum.length / 2]
        : (arraySum[arraySum.length / 2 - 1] + arraySum[arraySum.length / 2]) /
              2;
};

console.log(medianOfTwoSortedArrays([1, 2, 3], [2, 3, 5]));
