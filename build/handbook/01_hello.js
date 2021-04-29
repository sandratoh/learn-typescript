"use strict";
// Greets the world.
console.log('Hello world!');
// Explicit Types (type annotations)
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());
// Inferred Types
let msg = 'hello there!';
// Erased Types: when ts files are compiled, all TS-specificc code gets erased
