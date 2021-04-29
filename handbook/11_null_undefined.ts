/*
 * Different behaviour depending on `strictNullChecks`
 *
 * `strictNullChecks` off
 * -- values that are `null` or `undefined` can still be accessed
 * -- `null` and `undefined` can be assigned to a property of any type
 *
 * `strictNullChecks` on
 * -- need to test for values with `null` or `undefined` before using methods/properties on that value
 * -- use narrowing to check for `undefined` or `null` values
 */

function doSomething(x: string | undefined) {
  if (x === undefined) {
    // do nothing
  } else {
    console.log(`Hello ${x.toUpperCase()}`);
  }
}

/*
 * NON-NULL ASSERTION OPERATOR (Postfix `!`)
 * -- TS's special syntax for removing `null` and `undefined` from type w/o doing explicit checking
 * -- Writing `!` after expression === type assertion that value isn't `null` or `undefined`
 * -- Doesn't remove runtime error if it happens
 */

function liveDangerously(x?: number | undefined) {
  // No error
  console.log(x!.toFixed());
}
