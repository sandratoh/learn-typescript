"use strict";
const obj2 = { counter: 0 };
if (someCondition) {
    // counter assumed to have type `number` not `0`
    obj2.counter = 1;
}
/*
const req = { url: 'https://example.com', method: 'GET' };

handleRequest(req.url, req.method); // Error b/c req.method is inferred as `string` and not `GET`
*/
// Workaround 1 -- add type assertion in either location
// Change 1:
const req = { url: 'https://example.com', method: 'GET' };
// Change 2:
handleRequest(req.url, req.method);
// Workaround 2 -- use `as const` to convert entire object to type literals
const reqNew = { url: 'https://example.com', method: 'GET' };
handleRequest(reqNew.url, reqNew.method);
// `as const` explained:
// -- acts like `const` but for the type system
// -- ensure all properties are assigned the literal type
// -- instead of general version like `string` or `number`
