// Using `in` operator with Type Guards
// Type Guard = An expression that checks if a variable is a specific type

type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: 'Proxie',
  run: () => 'pitter pat',
};

const bettaFish = {
  name: 'Neptune',
  swim: () => 'bubble blub',
};

// Use `in` to check if a specific method exists on a type
function move(pet: Cat | Fish) {
  if ('run' in pet) {
    return pet.run();
  }

  if ('swim' in pet) {
    return pet.swim();
  }

  // can also narrow using `else` statement or inferred after return statement within type guard
}

console.log(move(bettaFish));
