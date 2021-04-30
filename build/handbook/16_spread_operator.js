"use strict";
// SPREAD OPERATOR
// -- Use with tuples
// -- Useful for function calls with lots of args
// Example 1
function gpsNavigate(startLatitudeDegrees, startLatitudeMinutes, startNorthOrSouth, startLongitudeDegrees, startLongitudeMinutes, startEastOrWest, endLatitudeDegrees, endLatitudeMinutes, endNorthOrSouth, endLongitudeDegrees, endLongitudeMinutes, endEastOrWest) {
    /* navigation subroutine here */
}
// Tuple type annotations ensure elems are valid function params
let codecademyCoordinates = [
    40,
    43.2,
    'N',
    73,
    59.8,
    'W',
];
let bermudaTCoordinates = [
    25,
    0,
    'N',
    71,
    0,
    'W',
];
// Use spread operator to write readable function call
gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// Example 2 -- ES6 arrow function syntax
const performDanceMove = (moveName, moveReps, hasFlair) => {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log('I do it with flair!');
    }
};
// Tuple type annotation
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
// Loop over array with spread operator
danceMoves.forEach(move => {
    performDanceMove(...move);
});
