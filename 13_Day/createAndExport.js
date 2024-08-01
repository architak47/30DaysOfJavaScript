// Activity : Creating and Exporting Modules
// Task 1: Create a Module that Exports a Function to add two numbers, import and use this module in another file

const addModule = require('./createModule.js');

console.log(addModule(2, 3)); 

// Task 2: Create a module that exports a  single default export. Import and use this module in another file.

import add from './createModule.mjs';
let a = 5, b = 6;
const sum = add(a, b);
console.log(`Sum of ${a} and ${b} is ${sum}`);