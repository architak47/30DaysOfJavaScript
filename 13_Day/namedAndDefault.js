// Activity 2: Named and Default Exports
// Task 1: create a module that exports multiple functions using named exports. Import and use these functions in another script.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

export { add, subtract, multiply, divide };


// Task 2: create a module that exports a single functionusing default export. Import and use this function in another script.

export default function sum(a, b) {
    return a + b;
}