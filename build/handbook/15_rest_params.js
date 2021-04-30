"use strict";
// REST PARAMETER -- Use array type annotation
/**
 * Adds up the `p`th powers of all subsequent arguments
 * @param p - Number of power
 * @param numsToAdd - Number that gets added after exponential operation
 * @returns Sum of exponential products
 */
function addPower(p, ...numsToAdd) {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += numsToAdd[i] ** p;
    }
    return answer;
}
// addPower('a string', 4, 5, 6); // Error: no number to power of a string
