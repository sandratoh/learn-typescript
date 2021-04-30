/**
 * Returns the sum of two numbers.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The sum of `x` and `y`
 *
 */
function getSum(x: number, y: number): number {
  return x + y;
}

/**
 * Repeatedly logs ready status based on parameters
 *
 * @param status - The ready status string
 * @param repeat - The number to repeat string, default = 1
 * @returns
 */

function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
