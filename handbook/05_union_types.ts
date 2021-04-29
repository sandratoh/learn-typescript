// UNION TYPES

function printId(id: number | string) {
  console.log('Your ID is: ' + id);
  // console.log(id.toUpperCase()); // Must use narrowing to access type-specificc methods

  // Narrowing example 1
  if (typeof id === 'string') {
    // id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // id is of type 'number'
    console.log(id);
  }
}

printId(101); // OK
printId('202'); // OK
// printId({ myID: 22342 }); // Error

// Narrowing example 2
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // x is type 'string[]'
    console.log('Hello, ' + x.join(' and '));
  } else {
    // x is type 'string'
    console.log('Welcome lone traveler ' + x);
  }
}

// Don't need narrowing if all union memebers have something in common
function getFirstThree(x: number[] | string) {
  // Return type is inferred as number[] | string
  return x.slice(0, 3);
}
