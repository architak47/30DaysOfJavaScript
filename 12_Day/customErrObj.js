// Activity 3: Custom Error Objects
// Task 1: Create a custom error class tht extends the built in error class. Throw an instance of this custo error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function throwError() {
    throw new CustomError('This is a custom error message');
}

try {
    throwError();
} catch (error) {
    if (error instanceof CustomError) {
        console.log(`Caught a custom error: ${error.message}`);
    } else {
        console.log(`Caught an unexpected error: ${error.message}`);
    }
}


// Task 2: write a fn that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try catch block.

const validateInput = (input) => {
    if(input === '') {
        throw new CustomError('Input cannot be empty');
    }
    return input;
}

try {
    console.log(validateInput(''));
} catch (error) {
    if (error instanceof CustomError) {
        console.log(`Caught a custom error: ${error.message}`);
    } else {
        console.log(`Caught an unexpected error: ${error.message}`);
    }
}