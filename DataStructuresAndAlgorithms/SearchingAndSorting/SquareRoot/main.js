"use strict";

// Implementation of Square Root function
const squareRoot = n => {
    if (n === 0 || n === 1) return n;
    let start = 1,
        end = n,
        ans;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (mid * mid === n) return mid;
        if (mid * mid < n) {
            start = mid + 1;
            ans = mid;
        } else end = mid - 1;
    }
    return ans;
};

console.log(squareRoot(909));
