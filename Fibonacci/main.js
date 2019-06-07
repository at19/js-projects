"use strict";

// Fibonacci Sequence
const getNthFibo = (n, lastlast, last) => {
    if (n === 0) return lastlast;
    if (n === 1) return last;

    return getNthFibo(n - 1, last, lastlast + last);
};

console.log(getNthFibo(8, 0, 1));
