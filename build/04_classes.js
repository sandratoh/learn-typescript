"use strict";
// Access modifiers (public, private, protected)
// public    - all methods are public and freely accessed by default
// private   - cannot be accessed outside of container class (not even in derived class)
// protected - accessible within the class and derived classes only
class Employee {
    // Uncomment to see different TS errors
    // protected constructor(name: string) {
    // private constructor(name: string) {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}!`);
    }
}
let emp1 = new Employee('Sandra');
console.log(emp1.employeeName);
emp1.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    deletegateWork() {
        console.log('Manager delegating tasks.');
    }
}
let m1 = new Manager('Bruce');
m1.deletegateWork();
m1.greet();
console.log(m1.employeeName);
