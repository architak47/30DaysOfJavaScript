// Activity 1: Creating and Exporting Modules
// Task 1: Create a Module that Exports a Function to add two numbers, import and use this module in another file

function add(a, b){
    return a + b;
}

// module.exports = add;

// Task 2:
function add(a, b) {
    return a + b;
}

export default add;
