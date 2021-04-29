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
let x: 'hello' = 'hello';
/*
x = 'hello'; // ok
x = 'howdy'; // error
*/

// LITERAL TYPES & UNIONS
function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // ...
}

/*
printText('Hello, world', 'left'); // OK
printText("G'day, mate", 'centre'); // Error: not assignable to param literal types
*/

// NUMERIC LITERAL TYPES
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// COMBINE WITH NON-LITERAL TYPES
interface Options {
  width: number;
}

function configure(x: Options | 'auto') {
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

function person(p: true | false) {
  //...
}
