// Function declaration syntax
function logNumber(i: number): void {
  console.log(i);
}

// Arrow function syntax -- single param no bracket
const logNumber2: (i: number) => void = i => {
  console.log(i);
};

// Shorter Arrow function syntax -- single param has bracket
const logNumber3 = (i: number): void => {
  console.log(i);
};

// Function returning Promise
const returningPromise = (): Promise<string> => {
  return new Promise(resolve => {
    resolve('hello there');
  });
};

returningPromise().then(str => console.log(str));

// Callback function syntax -- same as declaring method inside an object (see file 19)
const higherOrderFunction = (callback: (a: number) => void) => {
  callback(42);
};
