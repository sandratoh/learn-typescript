"use strict";
// Use generics to create colletions of typed functions
/**
 *
 * @param value - Generic type value to fill array
 * @param n - Number to repeat value and fill array
 * @returns Array of n amount of value as elements
 */
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
// Typed arrays
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Array value assigned using generic type function
stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
