// TYPE ALIASES -- a name for any type

// Type alis for union type
type ID = number | string;

// Type alias for object type
type Point = {
  x: number;
  y: number;
};

// Exactly same as earlier example
function printCoordAgain(pt: Point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({ x: 100, y: 100 });

// Tells TS not to worry about where function is coming from
declare function getInput(): string;
declare function sanitize(str: string): string;

type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = 'new input';
