"use strict";
// Primitives: string, number, boolean
const stringVar = 'Hello world';
const numberVar = 14;
const booleanVar = true;
// Arrays
const numArr = [1, 2, 3];
const strArr = ['a', 'b', 'c'];
// Array alt syntax
const altNumArr = [4, 5, 6];
const altStrArr = ['d', 'e', 'f'];
// Note: [number] is a different thing, refer to tuple types
// Type `any`
let obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n = obj;
