// WITHOUT GENERICS
// Case 1: Specify type
function identityWithoutGenerics1(arg: number): number {
  return arg;
}

// Ccase 2: Generic-ish with any, but loses info about return value
function identityWithoutGenerics2(arg: any): any {
  return arg;
}

// WITH GENERICS
// -- example with type variable `Type`
// -- single letters are used conventionally (e.g `T` or `K`)
function identity<Type>(arg: Type): Type {
  return arg;
}

let outputExplicit = identity<string>('myString');
// -- let outputExplicit: string

let outputInferred = identity('yourString');
// -- let otuputInferred: string

// WORKING WITH GENERIC TYPE VARIABLES

/* Error b/c T can be any type, number type doesn't have `length` property

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
}

*/

// This works because this === specifying 'generic type of array'
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // No error because array has .length
  return arg;
}

// can also use angle bracket syntax (arg: Array<T>)

// ANOTHER EXAMPLE:
const fillArray = <T>(length: number, elem: T) => {
  return new Array<T>(length).fill(elem);
};

const newArray = fillArray<string>(3, 'hi'); // => ['hi', 'hi', 'hi']

/*
newArray.push('bye'); // OK
newArray.push(true); // Error - only strings can be added to array
*/
