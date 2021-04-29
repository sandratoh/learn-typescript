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
enum DirectionInit {
  Up = 1, // value initialized: 1
  Down, // value auto-incremented: 2
  Left, // value auto-incremented: 3
  Right, // value auto-incremented: 4
}

// Uninitialized numeric enum (auto-incremented values)
enum DirectionAuto {
  Up, // value: 0
  Down, // value: 1
  Left, // value: 2
  Right, // value: 3
}

// Note: uninitialized enum need to be first, OR
//       come after initalized with numeric constants or other constant enum members

/*
 * USING ENUM
 * -- Access any enum member as a property off the enum
 * -- Declare types using the name of enum
 */

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond('Princess Caroline', UserResponse.Yes);

/*
 * STRING ENUMS
 * -- Must constant-initalize each member with a string literal, OR
 * -- with another string enum member
 * -- NO auto-incremental behaviour, but gives meaningful debug info
 */

enum DirectionStr {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

/*
 * HETEROGENEOUS ENUM
 * -- Mixing string and numeric members
 * -- NOT recommended
 */

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}

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
enum E {
  X,
}

// Case 2: All enum members in 'E1' and 'E2' are constant
enum E1 {
  X,
  Y,
  Z,
}

enum E2 {
  A = 1,
  B,
  C,
}

enum FileAccess {
  // CONSTANT MEMBERS
  None, // literal enum expression (basically string or numeric literal)
  Read = 1 << 1, // binary operators with constant enum expressions as operands
  Write = 1 << 2,
  ReadWrite = Read | Write, // reference to prev defined constant enum member
  // COMPUTED MEMBER
  G = '123'.length,
}
