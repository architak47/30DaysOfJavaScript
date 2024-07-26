// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Create a function that intentionally throws an error and use a try-catch block to handle the error and log the error message in the console.

function throwError() {
    throw new Error('This is an error message');
}

try {
    throwError();
} catch (error) {
    console.log(error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
    if(denominator === 0) {
        throw new Error('Denominator cannot be zero');
    }
    else{
        return numerator / denominator;
    }
}

try {
    divideNumbers(10, 0);
} catch (error) {
    console.log(error.message);
}