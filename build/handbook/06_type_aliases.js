"use strict";
// TYPE ALIASES -- a name for any type
// Exactly same as earlier example
function printCoordAgain(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 100, y: 100 });
function sanitizeInput(str) {
    return sanitize(str);
}
// Create a sanitized input
let userInput = sanitizeInput(getInput());
// Can still be re-assigned with a string though
userInput = 'new input';
