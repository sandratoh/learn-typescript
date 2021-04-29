// OBJECT TYPES -- list out object's properties and their types

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is ", pt.x);
  console.log("The coordinate's y value is ", pt.y);
}

printCoord({ x: 3, y: 7 });

// Optional Properties -- add ? after property name, and check for `undefined`
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last wasn't provided!
  // console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JS syntax
  console.log(obj.last?.toUpperCase());
}

// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
