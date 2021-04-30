"use strict";
/*
 * TUPLES
 * -- arrays with a fixed sequence of types
 * -- do NOT have compatible types with arrays
 */
let numbersTuple = [1, 2, 3];
let mixedTuple = ['hello', 4, true];
// Example: cannot assign array to tuple variable, even when elems are same types
let tup = ['hi', 'bye'];
let arr = ['here', 'there'];
/*
  tup = ['here', 'there']; // OK
  tup = arr; // Error: string[] is not assignable to [string, string]
 */
/*
 * ARRAY TYPE INFERENCE
 * -- TypeScript default: infer to the LEAST restrictive type (returns `array` type)
 * -- Use explicit type annotations if you want `tuple` type
 */
let dogTup = [
    'dog',
    'brown fur',
    'curly tail',
    'sad eyes',
];
// Same type inference when using .concat() method => array
let myArr = dogTup.concat(dogTup);
// -- let myArr: string[]
myArr[50] = 'not a dog';
// Able to access elem 50 therefore is an `array` and not `tuple`
// Recall tuple is fixed and `dobTup` only has 4 elems
