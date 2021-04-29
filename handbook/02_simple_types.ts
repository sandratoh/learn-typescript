// Primitives: string, number, boolean
const stringVar: string = 'Hello world';
const numberVar: number = 14;
const booleanVar: boolean = true;

// Arrays
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ['a', 'b', 'c'];

// Array alt syntax
const altNumArr: Array<number> = [4, 5, 6];
const altStrArr: Array<string> = ['d', 'e', 'f'];

// Note: [number] is a different thing, refer to tuple types

// Type `any`
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;