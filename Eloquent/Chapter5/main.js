"use strict";

// Exercise 1 - Flattening

/**
 * "Flatten" an array of arrays into a single array using 'reduce' and 'concat'
 * @param {T[]} array array of arrays
 */

const flatten = array => {
    return array.reduce((acc, value) => acc.concat(value));
};
