// Activity 5: Module Binding
// Task 1: use a module bundler like webpack or parcel to bundle javascript files into a single file, write a script to demonstrate the bundling process.

import {add}  from "../moduleBindingFile.js";

const a = 5;
const b = 11;
const sum = add(a, b);
console.log(`The sum of ${a} and ${b} is ${sum}`);