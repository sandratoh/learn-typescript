"use strict";
// Declare variable
const message = 'Hello World!';
// Accesing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// message();
// JS Output => TypeError: message is not a function
// Function will only work if given an object with a 'flip' property
// Can't tell from JS before runtime
function fn(x) {
    return x.flip();
}
// JavaScript => dynamic type-checking
// TypeScript => static type-checking
const user = {
    name: 'Daniel',
    age: 26,
};
// user.location;
function flipCoin() {
    // return Math.random < 0.5; // Incorrect
    return Math.random();
}
// Logic error example
/*
const value = Math.random() < 0.5 ? 'a' : 'b';
if (value !== 'a') {
  // ...
} else if (value === 'b') {
  // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
}
*/
