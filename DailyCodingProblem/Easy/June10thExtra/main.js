"use strict";

// Return a new sorted merged list from 'K' sorted lists, each with size 'N'.
const merge = lists => {
    const heap = [];
    for (const list of lists) {
        heap.push(...list);
    }

    return heap.sort((a, b) => a - b);
};
