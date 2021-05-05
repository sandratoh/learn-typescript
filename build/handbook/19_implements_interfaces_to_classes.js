"use strict";
// Add types to a `class` by applying/implementing an `interface`
// Use TS keyword `implements`
// Example 1: Add type to `DesktopDirectory` class by implementing `Directory` interface
class DesktopDirectory {
    constructor() {
        // Example 2: Nested/Deep types
        this.config = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-',
            },
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
console.log(Desktop.config);
