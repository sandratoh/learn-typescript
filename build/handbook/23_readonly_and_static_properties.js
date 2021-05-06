"use strict";
// Class construcctions: `readonly` and `static` properties
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    changeUnchangableName() {
        // this.unchangableName = 'foo'; // Error: cannot change b/c read-only property
    }
    // Error if missing function b/c implemented by interface
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
User.maxAge = 50;
User.bestFriend = 'dog';
const user1 = new User('Pika', 'Chu');
console.log(user1.getFullName());
// Static properties -- only accessible to class
console.log(User.maxAge); // 50
User.maxAge = 80; // OK
console.log(User.maxAge); // 80 -- Changed successfully
// Can add readonly to static properties -- won't allow change if added
console.log(User.bestFriend);
// User.bestFriend = 'cat' // Error: cannot change b/c read-only property
