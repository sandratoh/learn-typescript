"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// Output: 15
// Optional param in function
function addOpt(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
addOpt(5);
// Output: 5
// Default param in function
function addDefault(num1, num2 = 10) {
    return num1 + num2;
}
addDefault(5);
// Output: 15
