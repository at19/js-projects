"use strict";

// Exercise 1 - Looping a triangle

/**
 * Prints out a right-angled triangle with a height of 'n'
 * @param {number} n height of the triangle
 */

const loopTriangle = n => {
    for (let height = 0; height < n; height++) {
        let string = "";
        for (let length = 0; length < height; length++) {
            string += "#";
        }
        console.log(string);
    }
};

// Exercise 2 - FizzBuzz

/**
 * Prints out all the numbers from 1 to 100,
 * while replacing every number divisible by 3 with "Fizz"
 * and every number divisible by 5 with "Buzz"
 */

const fizzBuzz = () => {
    for (let index = 1; index <= 100; index++) {
        if (index % 3 === 0 && index % 5 === 0) console.log("FizzBuzz");
        else if (index % 3 === 0) console.log("Fizz");
        else if (index % 5 === 0) console.log("Buzz");
        else console.log(index);
    }
};

// Exercise 3 - Chessboard

/**
 * Prints out a chessboard of 'x' height and 'y' width, with '#' and whitespaces
 * @param {number} x height of the chessboard
 * @param {number} y width of the chessboard
 */

const chessboard = (x, y) => {
    for (let row = 1; row <= x; row++) {
        let string = "";
        let column = 1;
        if (row % 2 === 0) column++;
        for (column; column <= y; column++) {
            if (column % 2 === 0) string += "#";
            else string += " ";
        }
        console.log(string);
    }
};
