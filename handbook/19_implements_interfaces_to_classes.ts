// Add types to a `class` by implementing an `interface`
// Use TS keyword `implements`

interface Directory {
  // Refactor nested types with composed types
  config: Config;

  // Class method type here
  addFile: (name: string) => void;
}

// Composed Type 1
interface DefaultConfig {
  encoding: string;
  permissions: string;
}

// Composed Type 2
interface Config {
  default: DefaultConfig;
}

// Example 1: Add type to `DesktopDirectory` class by implementing `Directory` interface
class DesktopDirectory implements Directory {
  // Example 2: Nested/Deep types
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
console.log(Desktop.config);
