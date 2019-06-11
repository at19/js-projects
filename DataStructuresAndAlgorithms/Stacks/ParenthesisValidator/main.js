"use strict";

// A parenthesis validation checker using a stack

import Stack from "../main";

const isParenthesisValid = str => {
    let stack = new Stack();
    for (const letter of str) {
        if (letter === "(") {
            stack.push(letter);
        } else if (letter === ")") {
            if (stack.isEmpty()) return false;
            stack.pop();
        }
    }

    return true;
};

console.log(isParenthesisValid("(())"));
console.log(isParenthesisValid("(("));
