'use strict'

// Exercise 1 - Retry
class MultiplicatorUnitFailure extends Error {}

const primitiveMultiply = (x, y) => {
  const percentage = Math.floor(Math.random() * 100) + 1
  if (percentage <= 20) {
    return x * y
  } else {
    throw new MultiplicatorUnitFailure('Just cause.')
  }
}

/**
 * Keeps calling 'func' until it returns a result.
 * @param {function} func
 */

const patchThat = (func, x, y) => {
  try {
    console.log(func(x, y))
  } catch (error) {
    patchThat(func, x, y)
  }
}

patchThat(primitiveMultiply, 2, 5)
