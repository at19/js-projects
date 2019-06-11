"use strict";

// Implementation of a word counter
const wordCount = sentence => {
    const wordsArray = sentence.replace(/[.]/g, "").split(" "),
        occurenceList = {},
        answerList = {};

    for (const word of wordsArray) {
        // doesn't exist, set as 1st occurence
        if (!occurenceList[word]) {
            occurenceList[word] = 1;
        } else {
            occurenceList[word]++; // add occurences
        }
    }

    const tempArray = [];
    // push the value and key as fixed array
    for (const prop in occurenceList) {
        tempArray.push([occurenceList[prop], prop]);
    }

    const sortcomp = (a, b) => b[0] - a[0]; // compare the first element of the array;

    tempArray.sort(sortcomp); // sort

    for (
        let index = 0, arrayLength = tempArray.length;
        index < arrayLength;
        index++
    ) {
        const current = tempArray[index];
        answerList[current[1]] = current[0]; // key value pairs
    }
    return answerList;
};

console.log(
    wordCount("practice makes perfect. get perfect by practice. just practice.")
);
