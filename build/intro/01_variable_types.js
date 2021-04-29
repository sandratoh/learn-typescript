"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primitives
let isBeginner = true;
let total = 0;
let name = 'Sandra';
let sentence = `My name is ${name}.
I am learning TypeScript.`;
console.log(sentence);
let n = null;
let u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
// Array syntax (no difference)
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
// Tuple: Array syntax for mixed type (FIXED types, order matters)
let person1 = ['Chris', 22];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// Any type
let randomValue = 10;
randomValue = true;
randomValue = 'Sandra';
// TS doesn't throw any error with 'any' type
let myAnyVariable = 10;
console.log(myAnyVariable.name);
myAnyVariable();
myAnyVariable.toUpperCase();
// Throws error with 'unknown' type - cannot access properties, call, or construct
let myUnknownVariable = 10;
// User defined type guard - function to check if object has name
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(myUnknownVariable)) {
    console.log(myUnknownVariable.name);
}
// Need to use type assertion to get rid of error
myUnknownVariable.toUpperCase();
// Type inference (when initialized)
let a;
a = 10;
a = true;
let b = 20;
// Union type - still has intellisense support
let multiType;
multiType = 20;
multiType = true;
