"use strict";
// VARIABLE TYPE ANNOTATIONS
let myName = 'Alice';
let myNickName = 'Ally'; // No type annotation needed => type inferred
// Functions
// PARAMETER TYPE ANNOTATIONS -- after param name
function sayHello(name) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}
// sayHello(42); // Receive error from parameter type chceck
// RETURN TYPE ANNOTATIONS -- after param list
// usually not needed because inferred like variable type annotations
function getFavouriteNumber() {
    return 26;
}
// Anonymous Functions
// No type annotations here, but TS can spot the bug
const names = ['Alice', 'Bob', 'Eve'];
// Contextual typing for function
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing for arrow functions
names.forEach(s => {
    console.log(s.toUpperCase());
});
// No type annotation on param `s` but used types of the `forEach`
// function and inferred type of array to determine type of `s`
// CONTEXTUAL TYPING: the context that the function occurred in informed what type it should have
