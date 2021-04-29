"use strict";
/*
 * ENUMS
 * -- To describe a value which could be one of a set of possible named constants
 * -- TS allow for both numeric and string-based enums
 * -- Capitalize first letter of enum name
 */
/*
 * NUMERIC ENUMS
 * Auto-incremental behaviour by +1: starts at 0 if uninitialized
 */
// Initialized numeric enum
var DirectionInit;
(function (DirectionInit) {
    DirectionInit[DirectionInit["Up"] = 1] = "Up";
    DirectionInit[DirectionInit["Down"] = 2] = "Down";
    DirectionInit[DirectionInit["Left"] = 3] = "Left";
    DirectionInit[DirectionInit["Right"] = 4] = "Right";
})(DirectionInit || (DirectionInit = {}));
// Uninitialized numeric enum (auto-incremented values)
var DirectionAuto;
(function (DirectionAuto) {
    DirectionAuto[DirectionAuto["Up"] = 0] = "Up";
    DirectionAuto[DirectionAuto["Down"] = 1] = "Down";
    DirectionAuto[DirectionAuto["Left"] = 2] = "Left";
    DirectionAuto[DirectionAuto["Right"] = 3] = "Right";
})(DirectionAuto || (DirectionAuto = {}));
// Note: uninitialized enum need to be first, OR
//       come after initalized with numeric constants or other constant enum members
/*
 * USING ENUM
 * -- Access any enum member as a property off the enum
 * -- Declare types using the name of enum
 */
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    // ...
}
respond('Princess Caroline', UserResponse.Yes);
/*
 * STRING ENUMS
 * -- Must constant-initalize each member with a string literal, OR
 * -- with another string enum member
 * -- NO auto-incremental behaviour, but gives meaningful debug info
 */
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
/*
 * HETEROGENEOUS ENUM
 * -- Mixing string and numeric members
 * -- NOT recommended
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
/*
 * COMPUTED VS CONSTANT MEMBERS
 */
/*
 * CONSTANT MEMBER if:
 * -- Case 1: first member in enum with NO initializer
 * -- Case 2: does not have initializer, and preceding enum member is a NUMERIC constant
 * -- Case 3: initialized with a constant enum expression (look up)
 * all other cases = COMPUTED MEMBER
 */
// Case 1: E.X is constant
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
// Case 2: All enum members in 'E1' and 'E2' are constant
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
var FileAccess;
(function (FileAccess) {
    // CONSTANT MEMBERS
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // COMPUTED MEMBER
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
