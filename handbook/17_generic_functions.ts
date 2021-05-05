// Use generics to create colletions of typed functions
/**
 *
 * @param value - Generic type value to fill array
 * @param n - Number to repeat value and fill array
 * @returns Array of n amount of value as elements
 */
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

// Typed arrays
let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];
let coordinateArray: [number, number][];

// Array value assigned using generic type function
stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string; age: number }>(
  { name: 'J. Dean', age: 24 },
  6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);
