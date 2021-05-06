// Class construcctions: `readonly` and `static` properties

interface IUser {
  firstName: string;
  lastName: string;

  getFullName(): string;
}

class User implements IUser {
  firstName: string;
  lastName: string;
  readonly unchangableName: string;
  static maxAge = 50;
  static readonly bestFriend = 'dog';

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  changeUnchangableName(): void {
    // this.unchangableName = 'foo'; // Error: cannot change b/c read-only property
  }

  // Error if missing function b/c implemented by interface
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const user1 = new User('Pika', 'Chu');
console.log(user1.getFullName());

// Static properties -- only accessible to class
console.log(User.maxAge); // 50
User.maxAge = 80; // OK
console.log(User.maxAge); // 80 -- Changed successfully

// Can add readonly to static properties -- won't allow change if added
console.log(User.bestFriend);
// User.bestFriend = 'cat' // Error: cannot change b/c read-only property
