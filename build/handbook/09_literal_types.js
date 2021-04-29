"use strict";
// LITERAL TYPES
let changingString = 'Hello World';
changingString = 'Olá Mundo';
// no literal type representation -- can represent any possible string
changingString;
// TS type output -- let changingString : string
const constantString = 'Hello World';
// has literal type representation -- can only represent 1 possible string
constantString;
// const constantString: 'Hello World'
// Literal types will give error if tried to reassigned type
let x = 'hello';
/*
x = 'hello'; // ok
x = 'howdy'; // error
*/
// LITERAL TYPES & UNIONS
function printText(s, alignment) {
    // ...
}
/*
printText('Hello, world', 'left'); // OK
printText("G'day, mate", 'centre'); // Error: not assignable to param literal types
*/
// NUMERIC LITERAL TYPES
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
/*
configure({ width: 100 }); // Ok
configure('auto');         // Ok
configure('automatic');    // Error
*/
// BOOLEAN LITERAL TYPES-- boolean = alias for union true | false
const isAPerson = true;
const isNotAPerson = false;
isAPerson;
isNotAPerson;
function person(p) {
    //...
}
