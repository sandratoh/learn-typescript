"use strict";
function fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Bruce',
    // lastName: 'Wayne',
};
fullName(p);
