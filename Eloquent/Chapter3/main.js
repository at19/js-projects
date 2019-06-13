'use strict'

// Exercise 1 - Minimum

/**
 * Returns the minimum  from an array of numbers
 * @param {number[]} values array of numbers
 */

export const min = values => {
  let min = values[0]
  for (const value of values) {
    if (min > value) min = value
  }
  return min
}

// Exercise 2 - Bean Counting

/**
 * Returns how many 'B' (upper-case B)s are there in 'sentence'
 * @param {string} sentence
 */

export const countBs = sentence => {
  let bCount = 0
  for (const letter of sentence) {
    if (letter === 'B') bCount++
  }
  return bCount
}
