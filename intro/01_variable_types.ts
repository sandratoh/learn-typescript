export {};

// Primitives
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Sandra';

let sentence: string = `My name is ${name}.
I am learning TypeScript.`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

// Array syntax (no difference)
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple: Array syntax for mixed type (FIXED types, order matters)
let person1: [string, number] = ['Chris', 22];

// Enum type
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Sandra';

// TS doesn't throw any error with 'any' type
let myAnyVariable: any = 10;

console.log(myAnyVariable.name);
myAnyVariable();
myAnyVariable.toUpperCase();

// Throws error with 'unknown' type - cannot access properties, call, or construct
let myUnknownVariable: unknown = 10;

// User defined type guard - function to check if object has name
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(myUnknownVariable)) {
  console.log(myUnknownVariable.name);
}

// Need to use type assertion to get rid of error
(myUnknownVariable as string).toUpperCase();

// Type inference (when initialized)
let a;
a = 10;
a = true;

let b = 20;

// Union type - still has intellisense support
let multiType: number | boolean;
multiType = 20;
multiType = true;
