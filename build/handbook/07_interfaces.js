"use strict";
function printCoordThrice(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoordThrice({ x: 100, y: 100 });
// Works the same as type alias and anonymous object type
// TS only cares about the structure of value passed,
// hence, TS is called a `strcturally typed type system`
// Difference between interface and type alias
// Type alias: can NOT be reopened to add new properties, extended via intersections
// Interface: always extendable
